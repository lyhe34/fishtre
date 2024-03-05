<?php

namespace App\Components;

use App\Entity\CartProduct;
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

    #[LiveProp]
    public int $quantity = 1;

    #[LiveProp]
    public string $message = '';

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
        if(!$this->product->isActive()) {
            $this->addFlash('shop_error', "Ce produit n'est plus en vente.");
            return $this->redirectToRoute('app_shop_category', ['categoryName' => 'poissons']);
        }

        $productStock = $this->product->getStock();

        if($this->quantity > $productStock) {
            $this->message = 'Stock insuffisant.';
            return;
        }

        $cart = $this->cartManager->getCart();

        $existingCartProduct = $this->cartProductRepository->findOneBy(['cart' => $cart, 'product' => $this->product]); 

        if(null === $existingCartProduct) {
            $cartProduct = $this->cartProductFactory->create($this->product, $this->quantity);
            $this->product->setStock($productStock - $this->quantity);
            $cart->addCartProduct($cartProduct);
        } else {
            $oldQuantity = $existingCartProduct->getQuantity();
            $newQuantity = $oldQuantity + $this->quantity;
            $stockToRemove = $this->quantity;
            if($newQuantity > CartProduct::MAX_QUANTITY) {
                $newQuantity = CartProduct::MAX_QUANTITY;
                $stockToRemove = $newQuantity - $oldQuantity;
            }
            $this->product->setStock($productStock - $stockToRemove);
            $existingCartProduct->setQuantity($newQuantity);
        }

        $this->entityManager->flush();

        $this->emit('cartChanged');
    }
}

// class ProductForm extends AbstractController
// {
//     #[LiveAction]
//     public function addToCart()
//     {
//         if(!$this->product->isActive()) {
//             $this->addFlash('shop_error', "Ce produit n'est plus en vente.");
//             return $this->redirectToRoute('app_shop_category', ['categoryName' => 'poissons']);
//         }

//         $productStock = $this->product->getStock();

//         if($this->quantity > $productStock) {
//             $this->message = 'Stock insuffisant.';
//             return;
//         }

//         $cart = $this->cartManager->getCart();

//         $existingCartProduct = $this->cartProductRepository->findOneBy(['cart' => $cart, 'product' => $this->product]); 

//         if(null === $existingCartProduct) {
//             $cartProduct = $this->cartProductFactory->create($this->product, $this->quantity);
//             $this->product->setStock($productStock - $this->quantity);
//             $cart->addCartProduct($cartProduct);
//         } else {
//             $oldQuantity = $existingCartProduct->getQuantity();
//             $newQuantity = $oldQuantity + $this->quantity;
//             $stockToRemove = $this->quantity;
//             if($newQuantity > CartProduct::MAX_QUANTITY) {
//                 $newQuantity = CartProduct::MAX_QUANTITY;
//                 $stockToRemove = $newQuantity - $oldQuantity;
//             }
//             $this->product->setStock($productStock - $stockToRemove);
//             $existingCartProduct->setQuantity($newQuantity);
//         }

//         $this->entityManager->flush();

//         $this->emit('cartChanged');
//     }
// }

// class