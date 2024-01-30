<?php

namespace App\Command;

use App\Entity\Cart;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'make:admin',
    description: 'Create the main admin account',
)]
class CreateAdminCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $userPasswordHasher,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('password', InputArgument::REQUIRED, 'Password')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $password = $input->getArgument('password');

        $admin = new User();
        $cart = new Cart();

        $hashedPassword = $this->userPasswordHasher->hashPassword($admin, $password);

        $admin->setEmail('admin@poissonnerie.fr');
        $admin->setPassword($hashedPassword);
        $admin->setRoles(['ROLE_USER', 'ROLE_ADMIN']);
        $admin->setCart($cart);

        $this->entityManager->persist($admin);
        $this->entityManager->flush();

        $output->writeln("Admin user created successfully.");

        return Command::SUCCESS;
    }
}
