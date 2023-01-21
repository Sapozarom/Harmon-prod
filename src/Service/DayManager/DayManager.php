<?php

namespace App\Service\DayManager;

use App\Entity\Day;
use App\Repository\DayRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Small service for creatind Day objects
 */
class DayManager 
{

    private $dayRepo;
    private $entityManager;


    /**
     * @param EntityManagerInterface $em | Symfony+doctrine service
     * @param CardManager $cm | service that chenage game data into card object
     * @param ContainerBagInterface $params | Symfony param container
     */
    public function __construct(EntityManagerInterface $em, DayRepository $dayRepo)
    {
        $this->entityManager = $em;
        $this->dayRepo = $dayRepo;
    }


    /**
     * Creates Day object with proper sttarting data
     *
     * @param DateTime $date | date of creatind day
     * @param Game $game | party that day is assigned
     * @return Day | day object
     */
    public function createNewDay($date, $game)
    {
        $newDay = new Day;
        $newDay->setDate($date);
        $newDay->setGame($game);
        $this->entityManager->persist($newDay);
        $this->entityManager->flush();

        return $newDay;
    }

}