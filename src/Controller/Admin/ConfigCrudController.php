<?php

namespace App\Controller\Admin;

use App\Entity\Config;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ConfigCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Config::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
        ->add(Crud::PAGE_INDEX, Action::DETAIL)
        ->add(Crud::PAGE_EDIT, Action::SAVE_AND_ADD_ANOTHER)
        ->remove(Crud::PAGE_INDEX, Action::NEW)
        ->remove(Crud::PAGE_INDEX, Action::DELETE)
        ->remove(Crud::PAGE_DETAIL, Action::DELETE)
    ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('shopAddress')->setHelp("L'adresse où les clients récupèreront leur commandes. Les frais de livraison sont estimés en fonction de cette adresse."),
            NumberField::new('minShippingCost')->setHelp("Frais de livraison minimum."),
            NumberField::new('maxShippingCost')->setHelp("Frais de livraison maximum."),
            NumberField::new('shipCostStartIncrAt')->setHelp("A partir de combien de distance les frais de livraison augmente (kilomètres)."),
            NumberField::new('maxShipCostReachAt')->setHelp("A quelle distance les frais de livraison maximum sont atteint (kilomètres)."),
            NumberField::new('maxShippingDistance')->setHelp("La distance de livraison maximum (kilomètres)."),
            NumberField::new('freeShipMinCost')->setHelp('Coût de commande minimum pour la livraison gratuite.'),
            IntegerField::new('delivMinDaysApart')->setHelp("Combien de jours d'écart minimum pour être livré/récupérer la commande le prochain jours de livraison/récupération."),
            ArrayField::new('deliveryDays')->setHelp('Les jours de livraison/récupération (Lundi = 1, Mardi = 2, etc..).'),
        ];
    }
}
