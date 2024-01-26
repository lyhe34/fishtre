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

        $contentType = $this->getContentTypeFromExtension(pathinfo($filepath, PATHINFO_EXTENSION));

        $response = new Response(file_get_contents($filepath));

        $disposition = $response->headers->makeDisposition(ResponseHeaderBag::DISPOSITION_INLINE, $img);

        $response->headers->set('Content-Disposition', $disposition);
        $response->headers->set('Content-Type', $contentType);

        return $response;
    }

    private function getContentTypeFromExtension(string $extension): string
    {
        // Map file extensions to corresponding content types
        $contentTypeMapping = [
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            // Add more extensions as needed
        ];

        // Default to 'application/octet-stream' if the extension is not recognized
        return $contentTypeMapping[$extension] ?? 'application/octet-stream';
    }
}
