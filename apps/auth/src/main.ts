import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { AuthServer } from './auth.server';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const authServer = new AuthServer(app);
  authServer.init();
  authServer.run();
}
bootstrap();
