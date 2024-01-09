<?php

namespace App\Components;

use App\Entity\CartProduct;
use App\Service\CartManager;
use ArrayTools;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;

#[AsLiveComponent]
class CartList
{    
    use DefaultActionTrait;

    #[LiveProp]
    /** @var CartProduct[] */
    public $cartProducts = [];

    #[LiveListener('cartProductAdded')]
    public function addCartProduct(#[LiveArg] CartProduct $cartProduct)
    {
        array_push($this->cartProducts, $cartProduct);
    }

    #[LiveListener('cartProductRemoved')]
    public function removeCartProduct(#[LiveArg] CartProduct $cartProduct)
    {
        ArrayTools::removeBy($this->cartProducts, 'id', $cartProduct->getId());
    }

    public function getCartProducts(CartManager $cartManager)
    {
        return $cartManager->getCart()->getCartProducts();
    }
}