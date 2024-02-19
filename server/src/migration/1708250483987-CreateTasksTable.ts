import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTasksTable1708250483987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE IF NOT EXISTS tasks (
                id              BIGINT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name            VARCHAR(255) NOT NULL,
                status          TINYINT(1) DEFAULT 0 NOT NULL,
                due_date        DATETIME,
                category_id     BIGINT(10),
                priority        TINYINT(1) DEFAULT 1 NOT NULL,
                FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
            )
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            DROP TABLE IF EXISTS tasks
            `,
    );
  }
}
