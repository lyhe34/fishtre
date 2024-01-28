<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class OrderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Order::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->setDisabled()->onlyOnIndex(),
            DateField::new('date')->setDisabled()->hideWhenUpdating(),
            DateField::new('deliveryDate'),
            TextField::new('mode')->setDisabled()->hideWhenUpdating(),
            ChoiceField::new('state')->setChoices([
                'Confirmée' => 'confirmed',
                'Prête' => 'ready',
                'Terminée' => 'complete',
                'Annulée' => 'canceled'
            ])->setHelp(
                "Confimée : Commandes payées.
                Prête : En cours de livraison/Prête à être récupérée.
                Terminée : Commandes livrées/récupérées.
                Les commandes sauvegardées avec l'état Annuléee seront automatiquement remboursées."
            ),
            ArrayField::new('orderProducts')->onlyOnDetail(),
            TextField::new('address1')->setDisabled()->onlyOnDetail(),
            TextField::new('address2')->setDisabled()->onlyOnDetail(),
            TextField::new('postalCode')->setDisabled()->onlyOnDetail(),
            TextField::new('city')->setDisabled()->onlyOnDetail(),
            TextField::new('firstName')->setDisabled()->onlyOnDetail(),
            TextField::new('lastName')->setDisabled()->onlyOnDetail(),
            TextField::new('phone')->setDisabled()->onlyOnDetail(),
        ];
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->hideNullValues();
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_EDIT, Action::SAVE_AND_ADD_ANOTHER)
            ->remove(Crud::PAGE_INDEX, Action::NEW)
        ;
    }
}
