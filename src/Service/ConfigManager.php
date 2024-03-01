<?php

namespace App\Service;

use App\Entity\Config;
use App\Repository\ConfigRepository;

class ConfigManager
{
    public function __construct(
        private string $configName,
        private ConfigRepository $configRepository,
    ) {
    }

    /**
     * Get the config with name specified in services.yaml parameters
     */
    public function getConfig(): Config
    {
        return $this->configRepository->findOneBy(['name' => $this->configName]);
    }
}