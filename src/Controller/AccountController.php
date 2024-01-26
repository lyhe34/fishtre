<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccountController extends AbstractController
{
    #[Route('/account', name: 'app_account')]
    public function index(): Response
    {   
        return $this->render('account/index.html.twig', [
            'controller_name' => 'AccountController',
        ]);
    }

    #[Route('/account/orders', name: 'app_orders')]
    public function orders(): Response
    {
        /** @var User */
        $user = $this->getUser();

        return $this->render('account/orders.html.twig', [
            'orders' => $user->getOrders(),
        ]);
    }
}
