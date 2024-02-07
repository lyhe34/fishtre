<?php

namespace App\EventListener;

use App\Attribute\FileColumn;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Events;
use App\Service\AttributeReader;
use App\Service\FileStorage;

#[AsDoctrineListener(event: Events::postRemove, priority: 500, connection: 'default')]
class FileColumnListener
{
    public function __construct(
        private AttributeReader $attributeReader,
        private FileStorage $fileStorage,
    ) {
    
    }

    public function postRemove(PostRemoveEventArgs $eventArgs)
    {
        $entity = $eventArgs->getObject();

        $properties = $this->attributeReader->getPropertiesWithAttribute($entity, FileColumn::class);

        foreach ($properties as $property) {
            $this->fileStorage->removeFile($property->getValue($entity));
        }
    }
}