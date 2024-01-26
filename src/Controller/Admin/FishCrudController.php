<?php

namespace App\Controller\Admin;

use App\Entity\Fish;
use App\Entity\FishProduct;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

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
            BooleanField::new('featured')->renderAsSwitch(false),
            ImageField::new('image')->hideOnIndex()->setUploadDir('file_storage'),
            CollectionField::new('fishProducts')->useEntryCrudForm()->setEntryIsComplex()->hideOnIndex(),
        ];
    }
}
