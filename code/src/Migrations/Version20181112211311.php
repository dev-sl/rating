<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Class Version20181112211311
 * @package DoctrineMigrations
 */
final class Version20181112211311 extends AbstractMigration
{
    /**
     * {@inheritdoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('
            CREATE TABLE IF NOT EXISTS chronicle
            (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL
            );
            CREATE UNIQUE INDEX chronicle_name_uindex ON chronicle (name);
        ');
        $this->addSql("INSERT INTO chronicle (name) VALUES ('C1'), ('C2'), ('C3'), ('C4')");
    }

    /**
     * {@inheritdoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('DROP TABLE chronicle');
    }
}
