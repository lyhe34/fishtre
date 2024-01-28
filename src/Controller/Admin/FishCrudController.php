<?php

namespace App\Controller\Admin;

use App\Entity\Fish;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;

class FishCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Fish::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            'name',
            MoneyField::new('pricePerKilo')->setCurrency('EUR')->setStoredAsCents(false),
            BooleanField::new('active')->renderAsSwitch(false),
            BooleanField::new('featured')->renderAsSwitch(false)->setHelp("Affiche ou non le poisson en page d'accueil."),
            ImageField::new('image')->hideOnIndex()->setUploadDir('file_storage')->setHelp(
                "Image qualité faible/moyenne pour des raisons de performance. Essayer d'avoir la même taille d'image pour tout les poissons."
            ),
            CollectionField::new('fishProducts')->useEntryCrudForm()->setEntryIsComplex()->hideOnIndex()->setRequired(true),
        ];
    }
}
