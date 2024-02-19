import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRecordsToCategories1708321656227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `
          INSERT INTO categories (name) VALUES
            ('work'),
            ('family'),
            ('chores'),
            ('study'),
            ('self-care'),
            ('others');
        `,
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DELETE FROM categories WHERE name IN (
          'work',
          'family',
          'chores',
          'study',
          'self-care',
          'others'
        );
      `
    );
  }

}
