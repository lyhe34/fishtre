<?php

namespace App\Service;

class FileStorage
{
    private string $filesDirectory;

    public function __construct(string $filesDirectory) 
    {
        $this->filesDirectory = $filesDirectory;
    }

    public function resolveUri(string $path) : string
    {
        return $this->filesDirectory . '/' . $path;
    }
}