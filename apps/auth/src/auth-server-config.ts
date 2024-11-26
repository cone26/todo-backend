import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const environment = process.env.NODE_ENV || 'test';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.auth.${environment}.env`,
      isGlobal: true,
      load: [],
    }),
  ],
})
export class AuthServerConfig {}
