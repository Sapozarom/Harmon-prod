<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Game>
 * 
 * Repository class for entity Game
 * Methods have maing goal of obtaining and sorting data from DB
 *
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

    public function add(Game $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Game $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    // public function findGamesCreatedByUser(User $user)
    // {
    //     $result = $this->createQueryBuilder('g')
    //        ->andWhere('g.createdBy = :val')
    //        ->setParameter('val', $user)
    //        ->orderBy('g.id', 'ASC')
    //        ->getQuery()
    //        ->getResult();
             
    //     return $result;

    // }

    
    /**
     * Find all anctivities attended by User
     *
     * @param int $userId | users Id
     * @return array of activities
     */
    // public function findGamesInProgress($userId)
    // {
    //     $result = $this->createQueryBuilder('g')
    //         ->join('g.players', 'p')
    //         ->andWhere('p.id = :val')
    //         ->setParameter('val', $userId)
    //         ->orderBy('g.id', 'ASC')
    //         ->getQuery()
    //         ->getResult();
             
    //     return $result;

    // }

    /**
     * Find all anctivities attended by User
     *
     * @param int $userId | users Id
     * @return array of activities
     */
    public function findUserGames($userId)
    {
        $result = $this->createQueryBuilder('g')
            ->leftJoin('g.players', 'p')
            ->leftJoin('g.inactivePlayers', 'i')
            ->andWhere('p.id = :val')
            ->setParameter('val', $userId)
            ->orWhere('i.id = :val')
            ->setParameter('val', $userId)
            ->orderBy('g.id', 'ASC')
            ->groupBy('g')
            ->getQuery()
            ->getResult();

            $partyList = array();

            if ($result !== null) {
               foreach ($result as $party) {

                $isUserActive = true;

                $newParty['id'] = $party->getId();
                $newParty['name'] = $party->getName();
                $newParty['title'] = $party->getTitle();
                $newParty['description'] = $party->getDescription();
                $newParty['locked'] = $party->isLocked();
                $newParty['slug'] = $party->getSlug();
                $newParty['hosted'] = $party->getCreatedBy()->getId();
                $newParty['players'] = count($party->getPlayers()) + count($party->getInactivePlayers());
                $newParty['activeMembers'] = count($party->getPlayers());

                foreach ($party->getInactivePlayers() as $activeMember) {
                    if ($activeMember->getId() == $userId) {
                        $isUserActive = false;
                    }
                }

                $newParty['isActive'] = $isUserActive;
                
                array_push($partyList, $newParty);
               }
            }

        return $partyList;
    }

    /**
     * This method checks if user is member of specofic party
     *
     * @param integer $user
     * @param integer $gameId
     * @return null|Game
     */
    public function findIfIsMember($user, $gameId)
    {
        $result = false;

        $resultActive = $this->createQueryBuilder('g')
        ->join('g.players', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();

        if ($resultActive != null) {
           
        }

        $resultInactive = $this->createQueryBuilder('g')
        ->join('g.inactivePlayers', 'i')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('i.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();

        if ($resultInactive != null || $resultActive != null) {
            $result = true;
         }
         
        return $result;
    }

    /**
     * This method checks if user is ACTIVE member of specofic party
     *
     * @param integer $user
     * @param integer $gameId
     * @return null|Game
     */
    public function findIfIsActiveMember($user, $gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->join('g.players', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();
         
        return $result;
    }

        /**
     * This method checks if user is INACTIVE member of specofic party
     *
     * @param integer $user
     * @param integer $gameId
     * @return null|Game
     */
    public function findIfIsInactiveMember($user, $gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->join('g.inactivePlayers', 'p')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->andWhere('p.id = :val')
        ->setParameter('val', $user->getId())
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();
         
        return $result;
    }


    public function chcekPartyStatus($gameId)
    {
        $result = $this->createQueryBuilder('g')
        ->select('g.locked')
        ->andWhere('g.id = :gameId')
        ->setParameter('gameId', $gameId)
        ->orderBy('g.id', 'ASC')
        ->getQuery()
        ->getResult();

        if ($result[0]['locked'] == false) {
           return false;
        } else {
            return true;
        }
         
    }


    public function getMemberData($gameId, $member)
    {
        $isActive = $this->findIfIsActiveMember($member, $gameId);
        $isInactive = $this->findIfIsInactiveMember($member, $gameId);
        $partyStatus = $this->chcekPartyStatus($gameId);
        $member = array();
        
        if ($isActive != null || $isInactive != null) {
            $member['isMember'] = true;
        } else {
            $member['isMember'] = false; 
        }

        if ($isActive != null) {
            $member['isActive'] = true;
        } else {
            $member['isActive'] = false;
        }

        if ($isInactive != null) {
            $member['isInactive'] = true;
        } else {
            $member['isInactive'] = false;
        }
        $member['isLocked'] = $partyStatus;
        // if ($isInactive != null) {
        //     $member['isLocked'] = true;
        // } else {
        //     $member['isLocked'] = false;
        // }


        

        return $member;

    }
}
