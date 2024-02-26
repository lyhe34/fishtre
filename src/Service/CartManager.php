<?php

namespace App\Service;

use App\Entity\Cart;
use App\Entity\User;
use App\Entity\Product;
use App\Factory\CartProductFactory;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class CartManager
{
    public function __construct(
        private Security $security, 
        private SessionStorage $sessionStorage, 
        private EntityManagerInterface $entityManager,
        private CartProductFactory $cartProductFactory,
        private ConfigManager $configManager,
        private Shipping $shipping,
    ) { 

    }

    /**
     * Get the user cart, either from an authenticated user, or else from the session. If no cart session has been found, create a new one.
     * 
     * @return Cart
     */
    public function getCart(): Cart
    {
        /** @var User */
        if($user = $this->security->getUser()) {
            return $user->getCart();
        }

        $cart = $this->sessionStorage->get('cart', Cart::class);

        if(null === $cart) {
            $cart = new Cart();
            $this->sessionStorage->set('cart', $cart);
            $this->entityManager->persist($cart);
            $this->entityManager->flush();
        }
        
        return $cart;
    }

    /**
     * Cleans the cart by removing inactive or out of stock products.
     * 
     * @return bool If a product has been removed from cart.
     */
    public function cleanCart(): bool 
    {
        $cart = $this->getCart();
        $removed = false;

        foreach($cart->getCartProducts()->getValues() as $cartProduct) {
            if(!$cartProduct->getProduct()->isActive()) {
                $cart->removeCartProduct($cartProduct);
                $removed = true;
            }
        }

        $this->entityManager->flush();
        return $removed;
    }

    public function getTotalPrice(): ?float
    {
        /** @var User */
        if(!$user = $this->security->getUser()) {
            return null;
        }

        if(!$address = $user->getAddress()) {
            return null;
        }

        $cartPrice = $this->getCart()->getPrice();

        $shippingCost = $this->shipping->calculateShippingCost($cartPrice, $address);

        if($shippingCost === null) {
            return null;
        }

        return $this->getCart()->getPrice() + $shippingCost;
    }
}