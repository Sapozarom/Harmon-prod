<?php

namespace App\Controller;

use App\Repository\GameRepository;

use App\Service\DayManager\DayManager;
use App\Service\CalendarManager\CalendarManager;
use App\Repository\DayRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Event;
use App\Entity\Game;
use App\Form\GameType;
use App\Form\VoteType;
use App\Form\JoinGameType;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;


/**
 * Main controler that handles many party actions and resources
 */
class GameController extends AbstractController
{
    /**
     * 
     * API endpoint
     * Action used for sending votes
     *
     * @param integer $game | id of the game that got nev vote
     * @param GameRepository $gameRepo
     * @param DayRepository $dayRepo
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @param DayManager $dayMng
     * @return Response | JSON resource "message'
     */
    #[Route('/api/game/send-vote/{game}', name: 'api_send_vote')]
    public function sendVote(int $game, GameRepository $gameRepo, DayRepository $dayRepo, Request $request, ManagerRegistry $doctrine, DayManager $dayMng): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $date = new DateTime('today midnight');

        $event = new Event;

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

        $newForm = $this->createForm(VoteType::class);
        $newForm->handleRequest($request);
        $isMember = $gameRepo->findIfIsActiveMember($user, $game);

        // chceck if is active
        if ($isMember == null) {
            $message = 'You are not active member';
            return new JsonResponse($message, 403,['asdasd']);
        }

        if ($newForm->isSubmitted() && $newForm->isValid()) {

            $event = $newForm->getData();
            $event->setUser($user);
            $event->setGame($gameObj);

            $date = $event->getDate();

            $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

            if ($day == null) {
                $day = $dayMng->createNewDay($date, $gameObj);
            } else {
                $day = $day[0];
            }

            $day->addVote($event);
            $day->updateStatus();

            $entityManager = $doctrine->getManager();
            $entityManager->persist($event);
            $entityManager->flush();

            return $this->json([
                'message'  => 'success',
                'status' => $day->getStatus(),
            ], 200);
        }

        return $this->json([
            'message'  => 'fail',
        ]);
    }

    

    /**
     * API endpoint
     * returns JSON list of votes for specific composition of game and date
     *
     * @param integer $game | party ID
     * @param string $date | date DD-MM-YYYY
     * @param EventRepository $eventRepo
     * @param GameRepository $gameRepo
     * @param DayRepository $dayRepo
     * @return Response | JSON resource "votes"
     */
    #[Route('/api/game/get-votes/{game}/{date}', name: 'api_get_votes')]
    public function getVotes(int $game, string $date, EventRepository $eventRepo,  GameRepository $gameRepo, DayRepository $dayRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $dateObj = new DateTime($date);

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $day = $dayRepo->findDayByDateAndGameId($date, $gameObj);

        $votes = $eventRepo->getUsersEventsByDate($gameObj, $dateObj, $user);

        if ($votes != null) {
            return $this->json([
                'message'  => 'success',
                'votes' => $votes,
            ], 200);
        } else {
            return $this->json([
                'message'  => 'fail',
                'votes' => [],
            ], 200);
        }
    }



    /**
     * API enpoint
     * used to get data about specific party
     *
     * @param integer $game | party ID
     * @param GameRepository $gameRepo
     * @return Response JSON data "partyInfo"
     */
    #[Route('api/game/info/{game}', name: 'api_get_game_data')]
    public function getGameDataInfo(int $game, GameRepository $gameRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        if ($gameObj != null) {
            $party['name'] = $gameObj->getName();
            $party['activity'] = $gameObj->getTitle();
            $party['description'] = $gameObj->getDescription();
            $party['activeMembers'] = array();
            $party['inactiveMembers'] = array();
            $party['host'] = $gameObj->getCreatedBy()->getId();
            $party['status']=$gameObj->isLocked();

            foreach ($gameObj->getPlayers() as $player) {
                $new['id'] = $player->getId();
                $new['name'] = $player->getUsername();
                array_push($party['activeMembers'], $new);
            }

            foreach ($gameObj->getInactivePlayers() as $player) {
                $new['id'] = $player->getId();
                $new['name'] = $player->getUsername();
                array_push($party['inactiveMembers'], $new);
            }
        } 

        return $this->json([
            'partyInfo'  => $party,
        ]);
    }


    /**
     * API endpoint
     * returns users credentials for current game
     *
     * @param int|string $game |party ID
     * @param GameRepository $gameRepo
     * @return Response | JSON data 'memberInfo"
     */
    #[Route('api/game/member-data/{game}', name: 'api_get_member_data')]
    public function getMemberDataInfo($game, GameRepository $gameRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        if (strlen($game) == 16 ) {
            $gameObj = $gameRepo->findOneBy(['slug' => $game]);
            $gameId = $gameObj->getId();
        } else {
            $gameId = $game;
        }

        $memberData = $gameRepo->getMemberData($gameId , $user);


        if ($memberData != null) {
            return $this->json([
                'memberInfo'  => $memberData,
            ]);
        } else {
            return $this->json([
                'memberInfo'  => null,
            ]);
        }
        $party = null;
        
        return $this->json([
            'memberInfo'  => $party,
        ]);
    }


    /**
     * API endpoint
     * returns all informations required to render calendar of current month, for specific party
     *
     * @param integer $game | party ID
     * @param GameRepository $gameRepo
     * @param DayRepository $dayRepo
     * @param CalendarManager $calendarMng
     * @return Response | JSON data 'calendar"
     */
    #[Route('api/game/calendar/{game}', name: 'api_get_calendar')]
    public function getCalendarInfo(int $game, GameRepository $gameRepo, DayRepository $dayRepo, CalendarManager $calendarMng): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $date = new \DateTime('today midnight');
        $dateString = $date->format("Y-m-d");
        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $calendarArray = $calendarMng->setupCalendar($date, $gameObj, $user);

        $currentDay = $dayRepo->getDayInfo($dateString, $gameObj, $user);

        if ($currentDay == null) {
            $dayData['date'] = $date;
            $dayData['status'] = 'EMPTY';
            $dayData['userStatus'] = null;
            $dayData['userStatu'] = false;
            $dayData['remainingVoters'] = count($gameObj->getPlayers());
            $dayData['hours'] = [];
        } else {
            $dayData = $currentDay;
        }

        return $this->json([
            'calendar'  => $calendarArray,

        ]);
    }


    /**
     * API endpoint
     * Used for geting data about combination of specific party and date
     *
     * @param integer $game | party ID
     * @param string $date | date string DD-MM-YYYY
     * @param GameRepository $gameRepo
     * @param DayRepository $dayRepo
     * @return Response | JSON data "dayInfo"
     */
    #[Route('api/day/{game}/{date}', name: 'api_get_day')]
    public function getDayInfo(int $game, string $date, GameRepository $gameRepo, DayRepository $dayRepo): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        //form data
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $dayInfo = $dayRepo->getDayInfo($date, $gameObj, $user);

        return $this->json([
            'dayInfo' => $dayInfo,
        ]);
    }

    

    /**
     * API endpoint
     * Action used for changing status in specific party into "inactive"
     *
     * @param integer $game | party Id
     * @param GameRepository $gameRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */

     #[Route('api/game/make-me-inactive/{game}', name: 'api_make_me_inactive')]
    public function makeInactive(int $game,  GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $isActive = $gameRepo->findIfIsActiveMember($user, $gameObj->getId());

        if ($isActive != null) {
            $gameObj->removePlayer($user);
            $gameObj->addInactivePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();

            $message = "You are now inactive member of this party";
        } else {
            $message = "You are not active member";
        }

        return $this->json([
            'message' => $message,
        ]);
    }


    /**
     * API endpoint
     * Action used by host of party to change member status
     *
     * @param integer $game | party ID
     * @param integer $user | user ID of member whos status will be changed
     * @param GameRepository $gameRepo
     * @param UserRepository $userRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
     #[Route('api/game/change-user-status/{game}/{user}', name: 'api_change_user_status')]
    public function changeMemberStatus(int $game, int $user,  GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $response = new Response();
        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $userObj = $userRepo->findOneBy(['id' => $user]);

        $message = "You are mot host of this party";

        if ($gameObj->getCreatedBy() == $host) {

            $isActive = $gameRepo->findIfIsActiveMember($userObj, $gameObj->getId());
            $isInactive = $gameRepo->findIfIsInactiveMember($userObj, $gameObj->getId());

            if ($isActive != null) {
                $gameObj->removePlayer($userObj);
                $gameObj->addInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
                $message = "User is now INACTIVE member of this party";
            } elseif ($isInactive != null) {
                $gameObj->addPlayer($userObj);
                $gameObj->removeInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
                $message = "User is now ACTIVE member of this party";
            } else {
                $message = "User is not a member of this party";
            }
        }

        $response->setContent($message);
        $response->setStatusCode(Response::HTTP_OK);
        
        return $this->json([
            'message' => $message,
        ]);
    }

    /**
     * API endpoint
     * Action used by host of party to remove member from party
     *
     * @param integer $game | party ID
     * @param integer $user | user ID of targgeted member
     * @param GameRepository $gameRepo
     * @param UserRepository $userRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
     #[Route('api/game/remove-member/{game}/{user}', name: 'api_remove_member')]
    public function removeMember(int $game, int $user,  GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $userObj = $userRepo->findOneBy(['id' => $user]);

        $message = "You are not host of this party";

        if ($gameObj->getCreatedBy() == $host && $gameObj->getCreatedBy() != $userObj) {

            $isActive = $gameRepo->findIfIsActiveMember($userObj, $gameObj->getId());
            $isInactive = $gameRepo->findIfIsInactiveMember($userObj, $gameObj->getId());

            if ($isActive != null) {
                $gameObj->removePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
            } elseif ($isInactive != null) {
                $gameObj->removeInactivePlayer($userObj);
    
                $entityManager = $doctrine->getManager();
                $entityManager->persist($gameObj);
                $entityManager->flush();
    
            } else {
                $message = "User is not a member of this party";
            }
        }

        return $this->json([
            'message' => $message,
        ]);
    }


    /**
     * API endpoint
     * Action used by host of party to delete party
     *
     * @param integer $game | party ID
     * @param GameRepository $gameRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data []
     */
    #[Route('api/game/delete-party/{game}', name: 'api_delete_party')]
    public function deleteParty(int $game,  GameRepository $gameRepo,  ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $host = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        if ($gameObj->getCreatedBy() == $host ) {
            $entityManager = $doctrine->getManager();
            $entityManager->remove($gameObj);
            $entityManager->flush();
        }

        return $this->json([]);
    }



    /**
     * API endpoint
     * Action used by member of party to leave it
     *
     * @param integer $game | party ID
     * @param GameRepository $gameRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
    #[Route('api/game/leave/{game}', name: 'api_leave_party')]
    public function leaveParty(int $game,  GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);

        $isActive = $gameRepo->findIfIsActiveMember($user, $gameObj->getId());
        $isInactive = $gameRepo->findIfIsInactiveMember($user, $gameObj->getId());

        if ($gameObj->getCreatedBy() ==  $user) {
            $message = 'admin';
        } elseif ($isActive != null) {
            $gameObj->removePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            $message = 'success';
        } elseif ($isInactive != null) {
            $gameObj->removeInactivePlayer($user);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            $message = 'success';
        } else {
            $message = 'fail';
        }


        return $this->json([
            'message' => $message,
        ]);
    }
    
    /**
     * API endpoint
     * Action used by User to create new part
     *
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
    #[Route('/api/game/create', name: 'api_game_create')]
    public function createGame(Request $request, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $game = new Game;

        $form = $this->createForm(GameType::class, $game);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $game = $form->getData();
            $game->setCreatedBy($user);
            $game->addPlayer($user);
            $game->setLocked(false);

            $slug = bin2hex(random_bytes(8));

            $game->setSlug($slug);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($game);
            $entityManager->flush();

            return $this->json([
                'message' => 'success',
            ]);
        }

        return $this->json([
            'message' => 'fail',
        ], 400);
    }


    /**
     * API endpoint
     * Action used by host of party to lock it
     *
     * @param integer $game | party ID
     * @param GameRepository $gameRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
    #[Route('/api/game/change-lock-status/{game}', name: 'api_game_change_lock_status')]
    public function changeGameLockStatus( int $game, GameRepository $gameRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);
        $message = 'Something went wrong, check if you are host of this game ' . $gameObj->getName();

        if ($user == $gameObj->getCreatedBy() && $gameObj->isLocked()) {
            $gameObj->setLocked(false);
            $message = 'game is now ulocked (open for invitations)';
            
        } elseif ($user == $gameObj->getCreatedBy() && !$gameObj->isLocked()) {
            $gameObj->setLocked(true);
            $message = 'game is now locked (open for invitations)';
        }
        
        $entityManager = $doctrine->getManager();
        $entityManager->persist($gameObj);
        $entityManager->flush();

        return $this->json([
            'message' => $message,
        ], 200);
    }

    #[Route('/api/game/promote-to-host/{game}/{newHostId}', name: 'api_game_promoto_to_hoste')]
    /**
     * API endpoint
     * Action used by host of party to promote new host
     *
     * @param integer $game | party ID
     * @param integer $newHostId | user ID of promoted member
     * @param GameRepository $gameRepo
     * @param UserRepository $userRepo
     * @param ManagerRegistry $doctrine
     * @return Response | JSON data "message"
     */
    public function changeHost( int $game, int $newHostId, GameRepository $gameRepo, UserRepository $userRepo, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $gameObj = $gameRepo->findOneBy(['id' => $game]);
        $newHostObj = $userRepo->findOneBy(['id' => $newHostId]);

        $newHostIsMember = $gameRepo->findIfIsMember( $newHostObj, $game);
        if ($user == $gameObj->getCreatedBy() && $newHostIsMember != null) {
            $gameObj->setCreatedBy($newHostObj);

            $message = 'Host has beed changed';

            $entityManager = $doctrine->getManager();
            $entityManager->persist($gameObj);
            $entityManager->flush();
            
            return $this->json([
                'message' => $message,
            ], 200);
            
        } else {
            $message = 'Something went wrong, check if you are host of this game and new host is it"s member';
            return $this->json([
                'message' => $message,
            ], 400);
        }
        



    }

    /**
     * preREACT route for creating new party
     *
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return Response
     */
    #[Route('/game/create', name: 'app_game_create')]
    public function createGameAction(Request $request, ManagerRegistry $doctrine): Response
    {

        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $game = new Game;

        $form = $this->createForm(GameType::class, $game);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $game = $form->getData();
            $game->setCreatedBy($user);
            $game->addPlayer($user);
            $game->setLocked(false);

            $slug = bin2hex(random_bytes(8));

            $game->setSlug($slug);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($game);
            $entityManager->flush();
        }



        return $this->render('game/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    
    #[Route('api/party/join/{slug}', name: 'api_game_invite' )]
    /**
     * API endpoint
     * Action used by Users to join new party
     *
     * @param string $slug | party slug
     * @param ManagerRegistry $doctrine
     * @param GameRepository $gameRepo
     * @param Request $request
     * @return Response | JSON []
     */
    public function inviteToGame(string $slug, ManagerRegistry $doctrine, GameRepository $gameRepo, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        $game = $gameRepo->findOneBy(['slug' => $slug]);

        $playerCheck = $gameRepo->findIfIsMember($user, $game->getId());
        
        if (!$game->isLocked() && !$playerCheck) {
            
            $game->addPlayer($user);
            $entityManager = $doctrine->getManager();
            $entityManager->persist($game);
            $entityManager->flush();
            return $this->json([

            ], 200);
        }

        return $this->json([

        ], 400);
    }

    

    /**
     * preREACT route for inviting new members to party
     *
     * @param string $slug | party slug
     * @param ManagerRegistry $doctrine
     * @param GameRepository $gameRepo
     * @param Request $request
     * @return Response
     */
    #[Route('/party/invite/{slug}', name: 'app_game_invite')]
    public function inviteToGameAction(string $slug, ManagerRegistry $doctrine, GameRepository $gameRepo, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $game = $gameRepo->findOneBy(['slug' => $slug]);
        
        $playerCheck = $gameRepo->findIfIsMember($user, $game->getId());

        $acceptForm = $this->createForm(JoinGameType::class);

        $acceptForm->handleRequest($request);

        if ($game->isLocked()) {
            return $this->render('game/invite.html.twig', [
                'status' => 'locked',
            ]);
        }

        if ($_POST) {
            if (isset($_POST['join_game']['yes']) && !($playerCheck)) {
                $game->addPlayer($user);

                $entityManager = $doctrine->getManager();
                $entityManager->persist($game);
                $entityManager->flush();

                return $this->redirectToRoute('show_game', ['game' => $game->getId()]);
            } elseif (isset($_POST['join_game']['no'])) {

                return $this->redirectToRoute('my_activities', ['game' => $game->getId()]);
            }
        } else {

            // CHECK IF PLAYER IS ALREADY A MEMBER

            if ($playerCheck) {

                return $this->render('game/invite.html.twig', [
                    'status' => 'member',
                ]);
            }
        }

        return $this->render('game/invite.html.twig', [
            'status' => 'invite',
            'slug' => $slug,
            'accForm' => $acceptForm->createView(),
        ]);
    }
}
