<?php

namespace App\Entity;

use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Doctrine\ORM\Events;
use App\Service\AttributeReader;
use App\Service\FileStorage;
use Doctrine\ORM\Event\PostRemoveEventArgs;

class FileColumnSubscriber implements EventSubscriber
{
    public function __construct(
        private AttributeReader $attributeReader,
        private FileStorage $fileStorage,
    ) {
    
    }

    public function getSubscribedEvents(): array
    {
        return [
            Events::preUpdate => ['preUpdate'],
            Events::postRemove => ['postRemove'],
        ];
    }

    public function preUpdate(PreUpdateEventArgs $args)
    {
        $entity = $args->getObject();        

        $properties = $this->attributeReader->getPropertiesWithAttribute($entity::class, 'FileColumn');

        foreach ($properties as $property) {
            $oldValue = $args->getOldValue($property);
            if($oldValue) {
                $this->fileStorage->removeFile($oldValue);
            }
        }
    }

    public function postRemove(PostRemoveEventArgs $args)
    {
        $entity = $args->getObject();
        
        $properties = $this->attributeReader->getPropertiesWithAttribute($entity::class, 'FileColumn');

        foreach ($properties as $property) {
            $this->fileStorage->removeFile($property->getValue());
        }
    }
}