import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs('auth-database', () => ({
  type: 'mysql',
  namingStrategy: new SnakeNamingStrategy(),
  charset: 'utf8mb4',
  timezone: 'Z',
  extra: {
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  },
  maxQueryExecutionTime: 1000,
  logging: [],

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: ['dist/apps/auth/src/modules/**/*.entity.!(js.map){,+(ts,js)}'],
}));
