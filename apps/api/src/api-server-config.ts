import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiDatabaseConfig from './config/api-database.config';

const environment = process.env.NODE_ENV || 'test';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.api.${environment}.env`,
      isGlobal: true,
      cache: true,
      load: [apiDatabaseConfig],
    }),
  ],
})
export class ApiServerConfig {}
