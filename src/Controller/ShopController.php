<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ShopController extends AbstractController
{
    #[Route('/shop', name: 'app_shop')]
    public function index(): Response
    {
        return $this->render('shop/index.html.twig', [
        ]);
    }

    #[Route('/shop/product', name: 'app_shop_product')]
    public function product() : Response
    {
        return $this->render('shop/product.html.twig', [
        ]);
    }
}
