<?php

namespace App\Components;

use App\Entity\Address;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\Component\Form\FormInterface;
use App\Form\AddressType;
use App\Service\CartManager;
use App\Service\ConfigManager;
use App\Service\Shipping;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\TwigComponent\Attribute\PostMount;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsLiveComponent]
class ShippingAddressForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp]
    public ?Address $initialFormData;

    #[LiveProp]
    public float $totalPrice;

    #[LiveProp(writable: true)]
    public string $mode = "delivery";

    #[LiveProp]
    public string $error = "";

    #[LiveProp(writable: true)]
    public bool $modifyAddress = true;

    public function __construct(
        private CartManager $cartManager,
        private ConfigManager $configManager,
    ) {

    }

    #[PreMount]
    public function preMount()
    {
        /** @var User */
        if($user = $this->getUser()) {
            $this->modifyAddress = $user->getAddress() === null;
        }
    }

    #[PostMount]
    public function postMount()
    {
        $subTotal = $this->cartManager->getCart()->getTotalPrice();
        if($this->initialFormData) {
            $this->totalPrice = $subTotal + $this->initialFormData->getShippingCost() ?? 0;
        } else {
            $this->totalPrice = $subTotal;
        }
    }


    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(AddressType::class, $this->initialFormData);
    }

    #[LiveAction]
    public function saveAddress(Shipping $shipping, EntityManagerInterface $entityManager)
    {
        $this->submitForm();

        $this->initialFormData = $this->getForm()->getData();

        $distance = $shipping->getAddressDistance($this->initialFormData->getFullName());

        if(!$distance) {
            $this->error = "Veuillez entrer une adresse valide.";
            return;
        }

        if(!$shipping->isDistanceAllowed($distance)) {
            $this->error = "Désolé, nous ne livrons pas à cette adresse.";
            return;
        }

        $cost = $shipping->calculateCost($distance);

        /** @var User */
        $user = $this->getUser();

        $this->initialFormData->setShippingCost($cost);
        $user->setAddress($this->initialFormData);

        $entityManager->persist($user);
        $entityManager->persist($this->initialFormData);
        $entityManager->flush();

        $this->modifyAddress = false;
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $cart = $this->cartManager->getCart();
        
        if($cart->getCartProducts()->isEmpty()) {
            return $this->redirectToRoute('app_shop');
        }

        $subTotal = $cart->getTotalPrice();
        $this->totalPrice = $subTotal + $this->initialFormData->getShippingCost() ?? 0;
    }
}
