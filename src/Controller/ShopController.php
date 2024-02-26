<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/shop')]
class ShopController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository,
    ) { 
        
    }

    #[Route('/category/{categoryName}', name: 'app_shop_category')]
    public function category(string $categoryName)
    {
        $category = $this->categoryRepository->findOneBy(['name' => $categoryName]);

        if($category === null) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('shop/category.html.twig', [
            'category' => $category,
        ]);
    }

    #[Route('/product/{product}', name: 'app_shop_product')]
    public function product(Product $product)
    {
        return $this->render('shop/product.html.twig', [
            'product' => $product,
        ]);
    }
}
