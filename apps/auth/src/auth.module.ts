import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthServerConfig } from './auth-server-config';

@Module({
  imports: [AuthServerConfig],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
