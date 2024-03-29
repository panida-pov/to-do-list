import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  // For Docker, use `to-do-db`
  host: 'localhost',
  // For Docker, use `3306`
  port: 23306,
  username: 'root',
  password: 'root',
  database: 'todo',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  migrationsRun: false,
  migrations: [__dirname + '/migration/*.ts'],
  migrationsTableName: 'migration',
  synchronize: false,
};

const dataSource = new DataSource(dbDataSource);
export default dataSource;
