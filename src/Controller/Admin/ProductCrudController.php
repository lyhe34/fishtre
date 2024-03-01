<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            MoneyField::new('price')->setStoredAsCents(false)->setCurrency('EUR'),
            ImageField::new('image')->setUploadDir('file_storage')->setBasePath('file_storage')->setUploadedFileNamePattern('[uuid]-[name].[extension]'),
            IntegerField::new('stock'),
            BooleanField::new('active'),
            AssociationField::new('categories'),
        ];
    }
}

// class ProductCrudController extends AbstractCrudController
// {
//     public function configureFields(string $pageName): iterable
//     {
//         return [
//             TextField::new('name'),
//             MoneyField::new('price')->setStoredAsCents(false)->setCurrency('EUR'),
//             ImageField::new('image')->setUploadDir('file_storage')->setBasePath('file_storage')->setUploadedFileNamePattern('[uuid]-[name].[extension]'),
//             IntegerField::new('stock'),
//             BooleanField::new('active'),
//             AssociationField::new('categories'),
//         ];
//     }
// }

// c
