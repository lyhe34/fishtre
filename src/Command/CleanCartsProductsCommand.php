<?php

namespace App\Command;

use App\Repository\CartProductRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Doctrine\ORM\EntityManagerInterface;

#[AsCommand(
    name: 'app:clean-cart-products',
    description: 'Remove expired cart products',
)]
class CleanCartsProductsCommand extends Command
{
    public function __construct(
        private CartProductRepository $cartProductRepository,
        private EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $expiredCartProducts = $this->cartProductRepository->findExpiredCartProducts();

        foreach($expiredCartProducts as $expiredCartProduct) {
            $product = $expiredCartProduct->getProduct();
            $product->setStock($product->getStock() + $expiredCartProduct->getQuantity());
            $this->entityManager->remove($expiredCartProduct);
        }

        $this->entityManager->flush();

        $io = new SymfonyStyle($input, $output);

        $io->success('Expired cart products have been removed from database.');

        return Command::SUCCESS;
    }
}

// #[AsCommand(
//     name: 'app:clean-carts-products',
//     description: 'Remove expired cart products',
// )]
// class CleanCartsProductsCommand extends Command
// {
//     protected function execute(InputInterface $input, OutputInterface $output): int
//     {
//         $expiredCartProducts = $this->cartProductRepository->findExpiredCartProducts();

//         foreach($expiredCartProducts as $expiredCartProduct) {
//             $product = $expiredCartProduct->getProduct();
//             $product->setStock($product->getStock() + $expiredCartProduct->getQuantity());
//             $this->entityManager->remove($expiredCartProduct);
//         }

//         $this->entityManager->flush();

//         $io = new SymfonyStyle($input, $output);

//         $io->success('Expired cart products have been removed from database.');

//         return Command::SUCCESS;
//     }
// }

// *c
