import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  host: 'to-do-db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'todo',
  migrationsRun: false,
  migrations: [__dirname + '/migration/*.ts'],
  migrationsTableName: 'migration',
  synchronize: false,
};

const dataSource = new DataSource(dbDataSource);
export default dataSource;
