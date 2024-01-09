<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\FileStorage;

class ImageController extends AbstractController
{
    #[Route(path: 'image/{img}', name: 'image', methods: ['GET'])]
    public function image(string $img, FileStorage $fileStorage) : Response
    {
        $filepath = $fileStorage->resolveUri($img);

        $response = new Response(file_get_contents($filepath));

        $disposition = $response->headers->makeDisposition(ResponseHeaderBag::DISPOSITION_INLINE, $img);

        $response->headers->set('Content-Disposition', $disposition);
        $response->headers->set('Content-Type', 'image/png');

        return $response;
    }
}
