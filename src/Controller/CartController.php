<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    #[Route('/cart', name: 'app_cart')]
    public function index(): Response
    {
        $address = null;

        /** @var User */
        if($user = $this->getUser()) {   
            $address = $user->getAddress();
        }

        return $this->render('cart/index.html.twig', [
            'address' => $address,
        ]);
    }

    #[Route('/cart/add/{product}', name: 'app_cart_add')]
    public function add()
    {
        
    }
}
