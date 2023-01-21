<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


/**
 * Data fixtures used for uploading user (credentials open for everyone)
 */
class UserFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $passwordHasher)
        {
            $this->passwordHasher = $passwordHasher;
        }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setUsername('Sebi');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setPassword($this->passwordHasher->hashPassword(
            $admin,
            '1234'
        ));
        $user = new User();
        $user->setUsername('admin');

        $password = $this->passwordHasher->hashPassword($user, 'pass_1234');
        $user->setPassword($password);

        $manager->persist($user);
        $manager->flush();

        $manager->persist($admin);
        
        $userTest = new User();
        $userTest->setUsername('sapo');
        $userTest->setRoles(['ROLE_ADMIN']);
        $userTest->setPassword($this->passwordHasher->hashPassword(
                            $userTest,
                            'sapo'
                    ));

        $manager->persist($userTest);
        
        $manager->flush();
    }
}