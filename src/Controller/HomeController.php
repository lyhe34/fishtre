<?php

namespace App\Controller;

use App\Repository\FishRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(FishRepository $fishRepository): Response
    {
        $featuredFishes = $fishRepository->findBy(['featured' => true]);

        return $this->render('home/index.html.twig', [
            'featuredFishes' => $featuredFishes,
        ]);
    }
}
