import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ApiServerConfig } from './api-server-config';

@Module({
  imports: [ApiServerConfig],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
