import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class AuthServer {
  constructor(private readonly app: INestApplication) {}

  /**
   * initialize server
   */
  init() {
    this.app.setGlobalPrefix('auth');
    this._initializeSwagger();
  }

  /**
   * execute server
   */
  run() {
    this.app.listen(process.env.SERVER_PORT);
  }

  /**
   * @private
   * OPEN API(Swagger) 초기화
   */
  private _initializeSwagger(): void {
    const config = new DocumentBuilder()
      .setTitle('API Server')
      .setDescription('The Todo Auth API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('auth/api-docs', this.app, document);
  }
}
