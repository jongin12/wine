import { User } from './entity/user.entity';
import { DataSource } from 'typeorm';

const dotenv = require('dotenv');
dotenv.config();

export const dataSourceInstance = new DataSource({
  type: 'mysql',
  host: process.env.dbHost,
  port: 3306,
  username: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.database,
  entities: [User],
  migrations: [__dirname + '/entity/migrations/*.ts'],
  charset: 'utf8mb4',
  synchronize: false,
  logging: false,
  extra: {
    collation: 'utf8mb4_unicode_ci',
  },
});

dataSourceInstance.initialize().catch((error) => {
  console.error('Error during Data Source initialization', error);
});

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSourceInstance.isInitialized) {
    await dataSourceInstance.initialize();
  }
  return dataSourceInstance;
};
