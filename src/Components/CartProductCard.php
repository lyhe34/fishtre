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

    public const MAX_QUANTITY = 10;

    public function __construct(
        private EntityManagerInterface $entityManager,
        private CartManager $cartManager,
    ) {
    }

    #[LiveAction]
    public function removeFromCart()
    {    
        $this->cartManager->getCart()->removeCartProduct($this->cartProduct);
        $this->entityManager->flush();

        $this->emit('cartChanged');
    }

    #[LiveAction]
    public function incrementQuantity()
    {
        $quantity = $this->cartProduct->getQuantity();

        if($quantity >= self::MAX_QUANTITY || $quantity >= $this->cartProduct->getProduct()->getStock()) {
            return;
        }

        $this->cartProduct->setQuantity($quantity + 1);
        $this->entityManager->flush();

        $this->emit('cartChanged');
    }

    #[LiveAction]
    public function decrementQuantity()
    {
        $quantity = $this->cartProduct->getQuantity();

        if($quantity <= 1) {
            return;
        }

        $this->cartProduct->setQuantity($quantity - 1);
        $this->entityManager->flush();

        $this->emit('cartChanged');
    }
}