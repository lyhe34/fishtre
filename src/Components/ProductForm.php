<?php

namespace App\Components;

use App\Entity\Product;
use App\Factory\CartProductFactory;
use App\Repository\CartProductRepository;
use App\Service\CartManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class ProductForm
{
    use ComponentToolsTrait;
    use DefaultActionTrait;
    
    #[LiveProp]
    public Product $product;

    #[LiveProp(writable: true)]
    public int $quantity = 1;

    private const MAX_QUANTITY = 10;

    public function __construct(
        private CartManager $cartManager,
        private EntityManagerInterface $entityManager,
        private CartProductRepository $cartProductRepository,
        private CartProductFactory $cartProductFactory,
    ) {
        
    }

    #[LiveAction]
    public function incrementQuantity()
    {
        if($this->quantity > self::MAX_QUANTITY || $this->quantity > $this->product->getStock()) {
            return;
        }

        $this->quantity += 1;
    }

    #[LiveAction]
    public function decrementQuantity()
    {
        if($this->quantity <= 1) {
            return;
        }

        $this->quantity -= 1;
    }

    public function getPrice(): float
    {
        return $this->product->getPrice() * $this->quantity;;
    }
    
    #[LiveAction]
    public function addToCart()
    {
        $cartProduct = $this->cartProductRepository->findOneBy(['cart' => $this->cartManager->getCart(), 'product' => $this->product]);
        $cart = $this->cartManager->getCart();
        $productStock = $this->product->getStock();

        if($cartProduct === null) {
            if($this->quantity < $productStock) {
                $cartProduct = $this->cartProductFactory->create($cart, $this->product, $this->quantity);
                $this->cartManager->getCart()->addCartProduct($cartProduct);
            } else {
                return;
            }
        } elseif($cartProduct->getQuantity() + $this->quantity <= $this->product->getStock()) {
            $cartProduct->setQuantity($cartProduct->getQuantity() + $this->quantity);
        } else {
            return;
        }

        $this->entityManager->flush();
        
        $this->emit('cartChanged');
    }
}