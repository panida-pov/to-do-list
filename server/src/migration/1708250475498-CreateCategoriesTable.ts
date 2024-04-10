import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoriesTable1708250475498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE IF NOT EXISTS categories (
                id      BIGINT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name    VARCHAR(255) NOT NULL UNIQUE
            );
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            DROP TABLE IF EXISTS categories
            `,
    );
  }
}
