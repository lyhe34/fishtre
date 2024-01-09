<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class SessionStorage
{
    public function __construct(
        private RequestStack $requestStack, 
        private EntityManagerInterface $entityManager
    ) {

    }

    public function get(string $key, string $class)
    {
        $k = $this->getKey($key);

        if(null === $k)
        {
            return null;
        }

        $repository = $this->entityManager->getRepository($class);
        $object = $repository->find($this->getKey($key));

        return $object;
    }

    public function set(string $key, $entity)
    {
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        $this->setKey($key, $entity->getId());
    }

    private function getKey($key): ?int
    {
        return $this->getSession()->get($key);
    }

    private function setKey($key, $value)
    {
        $this->getSession()->set($key, $value);
    }

    private function getSession(): SessionInterface
    {
        return $this->requestStack->getSession();
    }
}