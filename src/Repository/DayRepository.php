<?php

namespace App\Repository;

use App\Entity\Day;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Day>
 * 
 * Repository class for entity Day
 * Methods have maing goal of obtaining and sorting data from DB
 *
 * @method Day|null find($id, $lockMode = null, $lockVersion = null)
 * @method Day|null findOneBy(array $criteria, array $orderBy = null)
 * @method Day[]    findAll()
 * @method Day[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DayRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Day::class);
    }

    public function add(Day $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Day $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Finds data about combination os secific party, date and user
     * 
     * @param DateTime $date
     * @param Game $game
     * @param User $user
     * @return array $dayData 
     */
    public function getDayInfo($date, $game, $user) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date = :date')
        ->setParameter('date', $date)
        ->groupBy('d')
        ->getQuery()
        ->getResult();

        if ($result == null) {
            $dayData['date'] = new DateTime($date) ;
            $dayData['status'] = 'EMPTY';
            $dayData['number'] = intval(substr($date,8,2)); 
            $dayData['monthNumber'] = intval(substr($date,5,2)); 
            $dayData['remainingVoters'] = count($game->getPlayers());
            $dayData['playerStatus'] = false;
            $dayData['hours'] = [];

        } else {
            $dayData['status'] = $result[0]->getStatus();
            $dayData['date'] = $result[0]->getDate();
            $dayData['number'] = intval($result[0]->getDate()->format('d')); 
            $dayData['monthNumber'] = intval($result[0]->getDate()->format('m')); 
            $dayData['remainingVoters'] = count($game->getPlayers()) -  count($result[0]->getVoted());
            $dayData['playerStatus'] = false;
            $dayData['hours'] = [];

            foreach ($result[0]->getVoted() as $voter) {
                if ($user->getId() == $voter->getId()) {
                    $dayData['playerStatus'] = true;
                }
            }

            foreach ($result[0]->getAvailableHours() as $range) {
                $match=array();
                $match['start'] = $range[0];
                $match['finish'] = $range[1];
                array_push($dayData['hours'] , $match);
            }


        }

        return $dayData;
    }

    /**
     * Finds data about combination od date and specific party
     *
     * @param DateTime $date
     * @param Game $game
     * @return array 
     */
    public function findDayByDateAndGameId($date, $game) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date = :date')
        ->setParameter('date', $date)
        ->getQuery()
        ->getResult();

        return $result;
    }

    /**
     * Finds the list of games required to render calendar for current month
     *
     * @param Game $game
     * @param DateTime $firstDay
     * @param DateTime $lastDay
     * @return array of Day info
     */
    public function getDaysForCalendar($game, $firstDay, $lastDay) {
        $qb = $this->createQueryBuilder('d');
        $result = $qb
        ->andWhere('d.game = :game')
        ->setParameter('game', $game)
        ->andWhere('d.date >= :firstDay')
        ->setParameter('firstDay', $firstDay)
        ->andWhere('d.date <= :lastDay')
        ->setParameter('lastDay', $lastDay)
        ->getQuery()
        ->getResult();

        return $result;
    }

}
