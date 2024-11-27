import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthServerConfig } from './auth-server-config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import authDatabaseConfig from './config/auth-database.config';

@Module({
  imports: [
    // config
    AuthServerConfig,

    // // Database
    // TypeOrmModule.forRootAsync({
    //   name: authDatabaseConfig().name,
    //   inject: [authDatabaseConfig.KEY],
    //   useFactory: async (config) => config,
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
