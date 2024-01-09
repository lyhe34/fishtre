<?php

namespace App\Service;

use App\Entity\Cart;
use App\Entity\Order;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class CartManager
{
    private ?Cart $cart = null;

    public function __construct(
        private Security $security, 
        private SessionStorage $sessionStorage, 
        private EntityManagerInterface $entityManager
    ) { 

    }

    public function getCart(): Cart
    {
        if(null !== $this->cart)
        {
            return $this->cart;
        }

        /** @var User */
        if($user = $this->security->getUser())
        {
            $cart = $user->getCart();

            if(null === $cart)
            {
                $cart = new Cart();
                $cart->setUser($user);
                $user->setCart($cart);

                /** @var Cart */
                $sessionCart = $this->sessionStorage->get('cart', Cart::class);

                if($sessionCart !== null && ($sessionCartProducts = $sessionCart->getCartProducts()) > 0)
                {
                    
                }
                
                $this->entityManager->persist($user);
                $this->entityManager->persist($cart);
                $this->entityManager->flush();
            }

            $this->cart = $cart;

            return $cart;
        }

        $cart = $this->sessionStorage->get('cart', Cart::class);

        if(null === $cart)
        {
            $cart = new Cart();
            $this->sessionStorage->set('cart', $cart);
        }
        
        $this->cart = $cart;

        $this->entityManager->persist($cart);
        $this->entityManager->flush();

        return $cart;
    }

    public function convertToOrder(): Order
    {
        $order = new Order();

        return $order;
    }
}