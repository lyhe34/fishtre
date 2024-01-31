<?php

namespace App\Controller;

use App\Repository\FishRepository;
use App\Service\ConfigManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(FishRepository $fishRepository, ConfigManager $configManager): Response
    {
        $featuredFishes = $fishRepository->findBy(['featured' => true]);

        return $this->render('home/index.html.twig', [
            'featuredFishes' => $featuredFishes,
            'freeShipMinCost' => $configManager->getConfig()->getFreeShipMinCost(),
        ]);
    }
}
