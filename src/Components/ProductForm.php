<?php

namespace App\Components;

use App\Entity\Product;
use App\Factory\CartProductFactory;
use App\Repository\CartProductRepository;
use App\Service\CartManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class ProductForm extends AbstractController
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
        $cart = $this->cartManager->getCart();

        $existingCartProduct = $this->cartProductRepository->findOneBy(['cart' => $cart, 'product' => $this->product]);
        
        $productStock = $this->product->getStock();

        if(null === $existingCartProduct) {
            if($this->quantity < $productStock) {
                $cartProduct = $this->cartProductFactory->create($cart, $this->product, $this->quantity);
                $cart->addCartProduct($cartProduct);
            } else {
                return;
            }
        } elseif($existingCartProduct->getQuantity() + $this->quantity <= $productStock) {
            $existingCartProduct->setQuantity($existingCartProduct->getQuantity() + $this->quantity);
        } else {
            return;
        }

        $this->entityManager->flush();

        $this->emit('cartChanged');
    }
}