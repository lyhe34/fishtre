<?php

namespace App\Service;

use ReflectionClass;

class AttributeReader
{
    public function getPropertiesWithAttribute(string $className, string $attributeName)
    {
        $reflectionClass = new ReflectionClass($className);
        $properties = $reflectionClass->getProperties();

        $filteredProperties = [];

        foreach ($properties as $property) {
            $attributes = $property->getAttributes();
    
            foreach ($attributes as $attribute) {
                if ($attribute->getName() === $attributeName) {
                    $filteredProperties[] = $property;
                    break;
                }
            }
        }
    
        return $filteredProperties;
    }
}