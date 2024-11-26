import { NestFactory } from '@nestjs/core';
import { AuthServer } from './auth.server';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const authServer = new AuthServer(app);
  authServer.init();
  authServer.run();
}
bootstrap();
