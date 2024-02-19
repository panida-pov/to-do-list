import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSampleTaskToTasks1708326938078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `
          INSERT INTO tasks (name, due_date, category_id, priority) VALUES
            ('learn nestjs', '2024-02-22 00:00:00', 4, 1),
            ('cook dinner', '2024-02-19 18:00:00', 3, 2),
            ('call mom', NULL, 2, 0);
        `,
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `
          DELETE FROM tasks WHERE name IN (
            'learn nestjs',
            'cook dinner',
            'call mom'
          );
        `
      );
    }

}
