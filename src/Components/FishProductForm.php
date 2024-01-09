<?php

namespace App\Components;

use App\Entity\Fish;
use App\Entity\FishProduct;
use App\Factory\CartProductFactory;
use App\Repository\FishProductRepository;
use App\Service\CartManager;
use App\Service\Utilities;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\ComponentToolsTrait;

#[AsLiveComponent]
class FishProductForm
{
    use DefaultActionTrait;
    use ComponentToolsTrait;

    #[LiveProp]
    public Fish $fish;

    /** @var FishProduct[] */
    #[LiveProp]
    public $fishProducts = [];

    #[LiveProp(writable: true)]
    public FishProduct $selectedFishProduct;

    #[LiveProp(writable: true)]
    public int $selectedFishProductId;

    public function __construct(
        private FishProductRepository $fishProductRepository,
        private CartManager $cartManager,
        private EntityManagerInterface $entityManager,
    ) {
    
    }

    public function setSelectedFishProductId(int $id)
    {
        $this->selectedFishProductId = $id;
        $this->selectedFishProduct = Utilities::arrayFind($this->fishProducts, 'id', $this->selectedFishProductId);
    }

    #[LiveAction]
    public function addToCart()
    {
        $cart = $this->cartManager->getCart();
        $cartProduct = CartProductFactory::create($cart, $this->selectedFishProduct->getProduct());
        $this->entityManager->persist($cartProduct);
        $cart->addCartProduct($cartProduct);
        $this->entityManager->persist($cart);
        $this->entityManager->flush();
        $this->emit('cartProductAdded', [ 'cartProduct' => $cartProduct->getId()]);
    }
}