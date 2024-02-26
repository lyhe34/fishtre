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

#[AsLiveComponent]
class ShippingAddressForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp]
    public ?Address $initialFormData;

    #[LiveProp]
    public ?float $shippingCost;

    #[LiveProp]
    public ?float $totalPrice;

    #[LiveProp(writable: true, onUpdated: 'update')]
    public string $mode = "delivery";

    #[LiveProp]
    public string $error = "";

    #[LiveProp(writable: true)]
    public bool $modifyAddress = true;

    public function __construct(
        private CartManager $cartManager,
        private ConfigManager $configManager,
        private Shipping $shipping,
    ) {

    }

    #[PostMount]
    public function postMount()
    {
        $this->update();
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

        $distance = $shipping->getAddressDistance($this->initialFormData);

        if(!$distance) {
            $this->error = "Veuillez entrer une adresse valide.";
            return;
        }

        if(!$shipping->isDistanceAllowed($distance)) {
            $this->error = "Désolé, nous ne livrons pas à cette adresse.";
            return;
        }

        /** @var User */
        $user = $this->getUser();

        $user->setAddress($this->initialFormData);

        $entityManager->persist($this->initialFormData);
        $entityManager->flush();

        $this->update();
        $this->modifyAddress = false;
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $cart = $this->cartManager->getCart();
        
        if($cart->getCartProducts()->isEmpty()) {
            return $this->redirectToRoute('app_home');
        }

        $this->update();
    }

    public function update()
    {
        $cartPrice = $this->cartManager->getCart()->getPrice();

        if($this->mode === 'pickup') {
            $this->shippingCost = 0;
            $this->totalPrice = $cartPrice;
        } else {
            /** @var User */
            $user = $this->getUser();

            if(!$address = $user->getAddress()) {
                $this->shippingCost = null;
                $this->totalPrice = null;
            }

            $shippingCost = $this->shipping->calculateShippingCost($cartPrice, $address->getFullAddress());

            $this->shippingCost = $shippingCost;
            $this->totalPrice = $cartPrice + $this->shippingCost;
        }
    }
}
