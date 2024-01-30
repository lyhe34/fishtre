<?php

namespace App\Components;

use App\Entity\Fish;
use App\Entity\FishProduct;
use App\Factory\CartProductFactory;
use App\Repository\FishProductRepository;
use App\Service\CartManager;
use App\Service\ArrayTools;
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
        private ArrayTools $arrayTools,
        private CartProductFactory $cartProductFactory,
    ) {
    
    }

    public function setSelectedFishProductId(int $id)
    {
        $this->selectedFishProductId = $id;
        $this->selectedFishProduct = $this->arrayTools->find($this->fishProducts, 'id', $this->selectedFishProductId);
    }

    #[LiveAction]
    public function addToCart()
    {
        $cart = $this->cartManager->getCart();

        $cartProduct = $this->cartProductFactory->create($cart, $this->selectedFishProduct->getProduct());
        
        $cart->addCartProduct($cartProduct);

        $this->entityManager->persist($cart);
        $this->entityManager->flush();

        $this->emit('cartChanged');
        $this->emit('cartProductAdded');
    }
}