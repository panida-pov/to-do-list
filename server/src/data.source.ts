import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'to-do-db',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DBNAME || 'todo',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  migrationsTableName: 'migration',
  synchronize: false,
  timezone: '+00:00',
};

const dataSource = new DataSource(dbDataSource);
export default dataSource;
