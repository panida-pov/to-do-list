import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  // For Docker, use `to-do-db`
  // For local, use `localhost`
  host: 'localhost',
  // For Docker, use `3306`
  // For local, use `23306`
  port: 23306,
  username: 'root',
  password: 'root',
  database: 'todo',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  migrationsRun: false,
  migrations: [__dirname + '/migration/*.ts'],
  migrationsTableName: 'migration',
  synchronize: false,
  timezone: '+00:00',
};

const dataSource = new DataSource(dbDataSource);
export default dataSource;
