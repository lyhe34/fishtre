<?php

namespace App\Command;

use App\Repository\CartRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:clean-session-carts',
    description: 'Removed expired session cart',
)]
class CleanSessionCartsCommand extends Command
{
    public function __construct(
        private CartRepository $cartRepository,
        private EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $expiredCarts = $this->cartRepository->findExpiredSessionCart();

        foreach($expiredCarts as $expiredCart) {
            $this->entityManager->remove($expiredCart);
        }

        $this->entityManager->flush();

        $io = new SymfonyStyle($input, $output);

        $io->success('Expired session carts have been removed from database.');

        return Command::SUCCESS;
    }
}

// #[AsCommand(
//     name: 'app:clean-session-carts',
//     description: 'Removed expired session cart',
// )]
// class CleanSessionCartsCommand extends Command
// {
//     protected function execute(InputInterface $input, OutputInterface $output): int
//     {
//         $expiredCarts = $this->cartRepository->findExpiredSessionCart();

//         foreach($expiredCarts as $expiredCart) {
//             $this->entityManager->remove($expiredCart);
//         }

//         $this->entityManager->flush();

//         $io = new SymfonyStyle($input, $output);

//         $io->success('Expired session carts have been removed from database.');

//         return Command::SUCCESS;
//     }
// }

// c
