import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { ApiServer } from './api.server';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const apiServer = new ApiServer(app);
  apiServer.init();
  apiServer.run();
}
bootstrap();
