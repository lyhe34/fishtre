<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127213757 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE IF NOT EXISTS address (
            id int NOT NULL AUTO_INCREMENT,
            address1 varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            address2 varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            postal_code varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
            city varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            shipping_cost double NOT NULL,
            first_name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            last_name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            phone varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS cart (
            id int NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS cart_product (
            id int NOT NULL AUTO_INCREMENT,
            cart_id int DEFAULT NULL,
            product_id int NOT NULL,
            PRIMARY KEY (id),
            KEY IDX_2890CCAA1AD5CDBF (cart_id),
            KEY IDX_2890CCAA4584665A (product_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=247 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS config (
            id int NOT NULL AUTO_INCREMENT,
            shop_address varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            min_shipping_cost double NOT NULL,
            max_shipping_cost double NOT NULL,
            ship_cost_start_incr_at double NOT NULL,
            max_ship_cost_reach_at double NOT NULL,
            max_shipping_distance double NOT NULL,
            free_ship_min_cost double NOT NULL,
            deliv_min_days_apart int NOT NULL,
            delivery_days json NOT NULL,
            name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('INSERT INTO config (id, shop_address, min_shipping_cost, max_shipping_cost, ship_cost_start_incr_at, max_ship_cost_reach_at, max_shipping_distance, free_ship_min_cost, deliv_min_days_apart, delivery_days, name) VALUES
        (7, "Port de plaisance, 34250 Palavas-les-Flots", 1.9, 4.9, 3, 8, 20, 30, 2, "[3, 5]", "default")');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS doctrine_migration_versions (
            version varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
            executed_at datetime DEFAULT NULL,
            execution_time int DEFAULT NULL,
            PRIMARY KEY (version)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS fish (
            id int NOT NULL AUTO_INCREMENT,
            name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            price_per_kilo double NOT NULL,
            image varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            active tinyint(1) NOT NULL,
            featured tinyint(1) NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS fish_product (
            id int NOT NULL AUTO_INCREMENT,
            fish_id int NOT NULL,
            product_id int NOT NULL,
            pieces int NOT NULL,
            weight double NOT NULL,
            image varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY UNIQ_AFC680A44584665A (product_id),
            KEY IDX_AFC680A48311A1E2 (fish_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS messenger_messages (
            id bigint NOT NULL AUTO_INCREMENT,
            body longtext COLLATE utf8mb4_unicode_ci NOT NULL,
            headers longtext COLLATE utf8mb4_unicode_ci NOT NULL,
            queue_name varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
            created_at datetime NOT NULL COMMENT "(DC2Type:datetime_immutable)",
            available_at datetime NOT NULL COMMENT "(DC2Type:datetime_immutable)",
            delivered_at datetime DEFAULT NULL COMMENT "(DC2Type:datetime_immutable)",
            PRIMARY KEY (id),
            KEY IDX_75EA56E0FB7336F0 (queue_name),
            KEY IDX_75EA56E0E3BD61CE (available_at),
            KEY IDX_75EA56E016BA31DB (delivered_at)
        ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS order (
            id int NOT NULL AUTO_INCREMENT,
            user_id int NOT NULL,
            date datetime NOT NULL COMMENT "(DC2Type:datetime_immutable)",
            state varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
            mode varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            delivery_date datetime NOT NULL,
            address1 varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            address2 varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            postal_code varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            city varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            shipping_cost double NOT NULL,
            first_name varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            last_name varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            phone varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            payment_intent_id varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            PRIMARY KEY (id),
            KEY IDX_F5299398A76ED395 (user_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS order_product (
            id int NOT NULL AUTO_INCREMENT,
            order_id int NOT NULL,
            product_id int NOT NULL,
            PRIMARY KEY (id),
            KEY IDX_2530ADE68D9F6D38 (order_id),
            KEY IDX_2530ADE64584665A (product_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        
        $this->addSql('CREATE TABLE IF NOT EXISTS product (
            id int NOT NULL AUTO_INCREMENT,
            name varchar(255) COLLATEutf8mb4_unicode_ci NOT NULL,
            price double NOT NULL,
            image varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');

        $this->addSql('CREATE TABLE IF NOT EXISTS reset_password_request (
            id int NOT NULL AUTO_INCREMENT,
            user_id int NOT NULL,
            selector varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
            hashed_token varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
            requested_at datetime NOT NULL COMMENT "(DC2Type:datetime_immutable)",
            expires_at datetime NOT NULL COMMENT "(DC2Type:datetime_immutable)",
            PRIMARY KEY (id),
            KEY IDX_7CE748AA76ED395 (user_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');

        $this->addSql('CREATE TABLE IF NOT EXISTS user (
            id int NOT NULL AUTO_INCREMENT,
            cart_id int NOT NULL,
            email varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
            roles json NOT NULL,
            password varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            address_id int DEFAULT NULL,
            is_verified tinyint(1) NOT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY UNIQ_8D93D649E7927C74 (email),
            UNIQUE KEY UNIQ_8D93D6491AD5CDBF (cart_id),
            UNIQUE KEY UNIQ_8D93D649F5B7AF75 (address_id)
        ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');

        $this->addSql('ALTER TABLE cart_product
            ADD CONSTRAINT FK_2890CCAA1AD5CDBF FOREIGN KEY (cart_id) REFERENCES cart (id),
            ADD CONSTRAINT FK_2890CCAA4584665A FOREIGN KEY (product_id) REFERENCES product (id)');

        $this->addSql('ALTER TABLE fish_product
            ADD CONSTRAINT FK_AFC680A44584665A FOREIGN KEY (product_id) REFERENCES product (id),
            ADD CONSTRAINT FK_AFC680A48311A1E2 FOREIGN KEY (fish_id) REFERENCES fish (id)');

        $this->addSql('ALTER TABLE order
            ADD CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');

        $this->addSql('ALTER TABLE order_product
            ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES product (id),
            ADD CONSTRAINT FK_2530ADE68D9F6D38 FOREIGN KEY (order_id) REFERENCES order (id)');

        $this->addSql('ALTER TABLE reset_password_request
            ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');

        $this->addSql('ALTER TABLE user
            ADD CONSTRAINT FK_8D93D6491AD5CDBF FOREIGN KEY (cart_id) REFERENCES cart (id),
            ADD CONSTRAINT FK_8D93D649F5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
