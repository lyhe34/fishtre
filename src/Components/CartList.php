<?php

namespace App\Components;

use App\Entity\CartProduct;
use App\Service\CartManager;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;

#[AsLiveComponent]
class CartList
{    
    use DefaultActionTrait;

    /** @var CartProduct[] */
    public $cartProducts = [];

    public function __construct(
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $this->cartProducts = $this->cartManager->getCart()->getCartProducts();
    }
}