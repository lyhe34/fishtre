<?php

namespace App\Components;

use App\Entity\CartProduct;
use App\Service\CartManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class CartProductCard
{
    use DefaultActionTrait;
    use ComponentToolsTrait;

    #[LiveProp(updateFromParent: true)]
    public CartProduct $cartProduct;

    #[LiveAction]
    public function removeFromCart(CartManager $cartManager, EntityManagerInterface $entityManager)
    {        
        $this->emit('cartProductRemoved', ['cartProduct' => $this->cartProduct->getId()]);
        
        $cart = $cartManager->getCart();
        $cart->removeCartProduct($this->cartProduct);
        $entityManager->persist($cart);
        $entityManager->flush();
    }
}