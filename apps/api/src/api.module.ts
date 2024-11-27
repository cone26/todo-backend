import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ApiServerConfig } from './api-server-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import apiDatabaseConfig from './config/api-database.config';

@Module({
  imports: [
    // config
    ApiServerConfig,

    // Database
    TypeOrmModule.forRootAsync({
      name: apiDatabaseConfig().name,
      inject: [apiDatabaseConfig.KEY],
      useFactory: async (config) => config,
    }),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
