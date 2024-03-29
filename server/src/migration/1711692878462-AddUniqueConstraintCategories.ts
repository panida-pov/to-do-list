import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueConstraintCategories1711692878462
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
              ALTER TABLE categories
              ADD CONSTRAINT unique_name UNIQUE (name)
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
          ALTER TABLE categories
          DROP INDEX unique_name
        `,
    );
  }
}
