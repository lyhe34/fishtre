<?php

namespace App\Repository;

use App\Entity\FishProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FishProduct>
 *
 * @method FishProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method FishProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method FishProduct[]    findAll()
 * @method FishProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FishProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FishProduct::class);
    }

//    /**
//     * @return FishProduct[] Returns an array of FishProduct objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FishProduct
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
