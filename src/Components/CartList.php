<?php

namespace App\Components;

use App\Entity\CartProduct;
use App\Service\ArrayTools;
use App\Service\CartManager;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;

#[AsLiveComponent]
class CartList
{    
    use DefaultActionTrait;

    /** @var CartProduct[] */
    #[LiveProp]
    public $cartProducts = [];

    public function __construct(
        private ArrayTools $arrayTools,
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $this->cartProducts = $this->cartManager->getCart()->getCartProducts()->toArray();
    }
}