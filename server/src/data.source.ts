import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost', //to-do-db
  port: 23306, //3306
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
