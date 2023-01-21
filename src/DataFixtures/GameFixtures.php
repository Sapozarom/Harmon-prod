<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Game;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


/**
 * Data fixtures used for uploading test user (credentials open for everyone)
 */
class GameFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $passwordHasher)
        {
            $this->passwordHasher = $passwordHasher;
        }

    public function load(ObjectManager $manager)
    {
        $game = new Game();
        $game->setTitle('Civilization 6');
        $game->setName('2v2v2');
        $game->setLocked(true);
        $slug = bin2hex(random_bytes(8));

        $game->setSlug($slug);

        $manager->persist($game);

        $game2 = new Game();
        $game2->setTitle('Civilization 6');
        $game2->setName('FFA');
        $game2->setLocked(false);
        $slug2 = bin2hex(random_bytes(8));

        $game2->setSlug($slug2);

        $manager->persist($game2);
        $manager->flush();
    }
}