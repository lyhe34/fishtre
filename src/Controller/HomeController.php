<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Service\ConfigManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(CategoryRepository $categoryRepository, ConfigManager $configManager): Response
    {
        $featuredCategories = $categoryRepository->findBy(['featured' => true, 'active' => true]);

        return $this->render('home/index.html.twig', [
            'featuredCategories' => $featuredCategories,
            'freeShipMinCost' => $configManager->getConfig()->getFreeShipMinCost(),
        ]);
    }
}
