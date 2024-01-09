<?php

namespace App\Controller;

use App\Entity\Fish;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\FishRepository;
use App\Repository\FishProductRepository;

class ShopController extends AbstractController
{
    #[Route('/shop', name: 'app_shop')]
    public function index(FishRepository $fishRepository): Response
    {
        $fishes = $fishRepository->findBy(['active' => true]);

        return $this->render('shop/index.html.twig', [
            'fishes' => $fishes,
        ]);
    }

    #[Route('/shop/product/{fish}', name: 'app_shop_product')]
    public function product(Fish $fish) : Response
    {
        return $this->render('shop/fish_product.html.twig', [
            'fish' => $fish,
        ]);
    }
}
