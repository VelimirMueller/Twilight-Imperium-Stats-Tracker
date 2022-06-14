<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220613103807 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE voted_stats (id INT AUTO_INCREMENT NOT NULL, sessions_played INT DEFAULT NULL, average_score INT DEFAULT NULL, longest_winning_streak INT DEFAULT NULL, most_played_faction INT DEFAULT NULL, tyrant INT DEFAULT NULL, hero INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE voted_stat');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE voted_stat (id INT AUTO_INCREMENT NOT NULL, sessions_played INT DEFAULT NULL, average_score INT DEFAULT NULL, longest_winning_streak INT DEFAULT NULL, most_played_faction INT DEFAULT NULL, tyrant INT DEFAULT NULL, hero INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE voted_stats');
    }
}
