<?php

namespace App\Controller;

use App\Repository\DayRepository;
use App\Repository\EventRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    

    /**
     * 
     * API endpoint
     * Action for deleteing members votes
     *
     * @param integer $id | vote ID
     * @param EventRepository $eventRepo 
     * @param DayRepository $dayRepo
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/api/vote/delete/{id}', name: 'api_delete_vote')]
    public function deleteVote(int $id, EventRepository $eventRepo,  DayRepository $dayRepo, ManagerRegistry $doctrine)    
    {
        $user = $this->getUser();

        $vote = $eventRepo->deleteUserVote($id, $user);

        $dayObj = $dayRepo->findOneBy(['id' => $vote['dayId']]);
        $eventObj = $eventRepo->findOneBy(['id' => $id]);

        $entityManager = $doctrine->getManager();
        $entityManager->remove($eventObj);
        $entityManager->flush();
        $playersVotes = $eventRepo->findUserVotes($vote['gameObj'], $dayObj->getDate()->format('Y-m-d'), $user);

        if ($playersVotes == null) {
            $dayObj->removeVoted($user);
        }

        $dayObj->updateStatus($vote['voteType']);

        $entityManager->persist($dayObj);
        $entityManager->flush();

        return new JsonResponse(['id' => $id], 200);
    }

}
