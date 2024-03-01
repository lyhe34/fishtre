<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class SessionStorage
{
    public function __construct(
        private RequestStack $requestStack, 
        private EntityManagerInterface $entityManager,
    ) {

    }

    /**
     * Get entity from current session
     * 
     * @param string $name
     * @param string $entityClass
     * 
     * @return mixed The entity
     */
    public function get(string $name, string $entityClass): mixed
    {
        $repository = $this->entityManager->getRepository($entityClass);

        $id = $this->getSession()->get($name);

        if(null === $id) {
            return null;
        }

        return $repository->find($id) ?? null;
    }

    /**
     * Set entity to current session
     * 
     * @param string $name 
     * @param mixed $entity
     */
    public function set(string $name, mixed $entity)
    {
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        $this->getSession()->set($name, $entity->getId());
    }

    /**
     * Get the current session from request
     * 
     * @return SessionInterface
     */
    private function getSession(): SessionInterface
    {
        return $this->requestStack->getSession();
    }
}

// class SessionStorage
// {
//     /**
//      * Get entity from current session
//      * 
//      * @param string $name
//      * @param string $entityClass
//      * 
//      * @return mixed The entity
//      */
//     public function get(string $name, string $entityClass): mixed
//     {
//         $repository = $this->entityManager->getRepository($entityClass);

//         $id = $this->getSession()->get($name);

//         if(null === $id) {
//             return null;
//         }

//         return $repository->find($id) ?? null;
//     }

//     /**
//      * Set entity to current session
//      * 
//      * @param string $name 
//      * @param mixed $entity
//      */
//     public function set(string $name, mixed $entity)
//     {
//         $this->entityManager->persist($entity);
//         $this->entityManager->flush();

//         $this->getSession()->set($name, $entity->getId());
//     }

//     /**
//      * Get the current session from request
//      * 
//      * @return SessionInterface
//      */
//     private function getSession(): SessionInterface
//     {
//         return $this->requestStack->getSession();
//     }
// }

// class