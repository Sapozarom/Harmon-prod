<?php

namespace App\Controller;

use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Main controling serving homepage data
 */
class HomepageController extends AbstractController
{
    /**
     * Homepage route
     *
     * @return Response
     */
    #[Route('/{reactRouting}', name: 'app_homepage', priority: '-1', requirements: ["reactRouting"=>".+"], defaults: ["reactRouting" => null])]
    public function index(): Response
    {   

        return $this->render('homepage/index.html.twig', [
            // 'controller_name' => 'HomepageController',
        ]);
    }


    /**
     * API endpoint
     * This route is used to get current user data and render proper navigation
     *
     * @return Response | JSON data 'user'
     */
    #[Route('/api/homepage/user', name: 'api_homepage_nav')]
    public function getNavInfo(): Response
    {      

        if ($this->getUser()) {
            return $this->json([
                'user'  => $this->getUser()->getId(),
            ]);
        } else {
            return $this->json([
                'user'  => null,
            ]);
        }

        return $this->render('homepage/index.html.twig', [
        ]);
    }

    #[Route('/api/my-activities', name: 'api_my_activities')]
    /**
     * API endpoint
     * This route redends resources required to display list of users parties
     *
     * @param GameRepository $gameRepo
     * @return Response | JSON data "activityTable"
     */
    public function getUserActivitiesAction(GameRepository $gameRepo): Response
    {   
        $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();
        $playedGames = $gameRepo->findUserGames($user->getId());
        return $this->json([
            'activityTable'  => $playedGames,
        ]);
    }

}
