<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231221180617 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cart (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_BA388B7A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cart_order_product (cart_id INT NOT NULL, order_product_id INT NOT NULL, INDEX IDX_1128FB881AD5CDBF (cart_id), INDEX IDX_1128FB88F65E9B0F (order_product_id), PRIMARY KEY(cart_id, order_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fish (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price_per_kilo DOUBLE PRECISION NOT NULL, image VARCHAR(255) NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fish_product (id INT AUTO_INCREMENT NOT NULL, fish_id INT NOT NULL, image VARCHAR(255) NOT NULL, pieces INT NOT NULL, weight DOUBLE PRECISION NOT NULL, INDEX IDX_AFC680A48311A1E2 (fish_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', state VARCHAR(10) NOT NULL, INDEX IDX_F5299398A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_order_product (order_id INT NOT NULL, order_product_id INT NOT NULL, INDEX IDX_8853E5348D9F6D38 (order_id), INDEX IDX_8853E534F65E9B0F (order_product_id), PRIMARY KEY(order_id, order_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_product (id INT AUTO_INCREMENT NOT NULL, fish_product_id INT NOT NULL, count INT NOT NULL, INDEX IDX_2530ADE6F1B4CFED (fish_product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) DEFAULT NULL, last_name VARCHAR(255) DEFAULT NULL, phone VARCHAR(10) DEFAULT NULL, street_number INT DEFAULT NULL, street_name VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, zip_code VARCHAR(5) DEFAULT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cart ADD CONSTRAINT FK_BA388B7A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cart_order_product ADD CONSTRAINT FK_1128FB881AD5CDBF FOREIGN KEY (cart_id) REFERENCES cart (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cart_order_product ADD CONSTRAINT FK_1128FB88F65E9B0F FOREIGN KEY (order_product_id) REFERENCES order_product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fish_product ADD CONSTRAINT FK_AFC680A48311A1E2 FOREIGN KEY (fish_id) REFERENCES fish (id)');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE order_order_product ADD CONSTRAINT FK_8853E5348D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_order_product ADD CONSTRAINT FK_8853E534F65E9B0F FOREIGN KEY (order_product_id) REFERENCES order_product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE6F1B4CFED FOREIGN KEY (fish_product_id) REFERENCES fish_product (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cart DROP FOREIGN KEY FK_BA388B7A76ED395');
        $this->addSql('ALTER TABLE cart_order_product DROP FOREIGN KEY FK_1128FB881AD5CDBF');
        $this->addSql('ALTER TABLE cart_order_product DROP FOREIGN KEY FK_1128FB88F65E9B0F');
        $this->addSql('ALTER TABLE fish_product DROP FOREIGN KEY FK_AFC680A48311A1E2');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398A76ED395');
        $this->addSql('ALTER TABLE order_order_product DROP FOREIGN KEY FK_8853E5348D9F6D38');
        $this->addSql('ALTER TABLE order_order_product DROP FOREIGN KEY FK_8853E534F65E9B0F');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE6F1B4CFED');
        $this->addSql('DROP TABLE cart');
        $this->addSql('DROP TABLE cart_order_product');
        $this->addSql('DROP TABLE fish');
        $this->addSql('DROP TABLE fish_product');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_order_product');
        $this->addSql('DROP TABLE order_product');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
