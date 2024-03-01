<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            ImageField::new('image')->setUploadDir('file_storage')->setBasePath('file_storage')->setUploadedFileNamePattern('[uuid]-[name].[extension]'),
            BooleanField::new('active'),
            BooleanField::new('featured'),
            AssociationField::new('parentCategories'),
            AssociationField::new('products'),
        ];
    }
}

// class CategoryCrudController extends AbstractCrudController
// {
//     public function configureFields(string $pageName): iterable
//     {
//         return [
//             TextField::new('name'),
//             ImageField::new('image')->setUploadDir('file_storage')->setBasePath('file_storage')->setUploadedFileNamePattern('[uuid]-[name].[extension]'),
//             BooleanField::new('active'),
//             BooleanField::new('featured'),
//             AssociationField::new('parentCategories'),
//             AssociationField::new('products'),
//         ];
//     }
// }

// c