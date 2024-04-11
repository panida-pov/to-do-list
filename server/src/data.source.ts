import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.HOST || 'to-do-db',
  port: parseInt(process.env.PORT, 10) || 3306,
  username: 'root',
  password: 'root',
  database: 'todo',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  migrationsRun: true,
  migrations: [__dirname + '/migration/*.ts', __dirname + '/migration/*.js'],
  migrationsTableName: 'migration',
  synchronize: false,
  timezone: '+00:00',
};

const dataSource = new DataSource(dbDataSource);
export default dataSource;
