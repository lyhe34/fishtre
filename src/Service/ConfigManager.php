<?php

namespace App\Service;

use App\Entity\Config;
use App\Repository\ConfigRepository;

class ConfigManager
{
    private Config $config;

    public function __construct(
        private string $configName,
        private ConfigRepository $configRepository,
        ) {
        $this->config = $configRepository->findOneBy(['name' => $configName]);
    }

    public function getConfig(): Config
    {
        return $this->config;
    }
}