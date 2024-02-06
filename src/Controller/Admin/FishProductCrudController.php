<?php

namespace App\Controller\Admin;

use App\Entity\FishProduct;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class FishProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FishProduct::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('pieces'),
            NumberField::new('weight')->setHelp('En Kilogrammes (0.5 = 500 grammes)'),
            ImageField::new('image')->setUploadDir('file_storage')->setBasePath('file_storage')->setHelp('Image spécifique pour ce produit. Pas obligatoire.'),
        ];
    }
}
