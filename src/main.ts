import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(
    ['/docs', 'docs-json'],
    basicAuth({ challenge: true, users: { [configService.get('swagger.username')]: configService.get('swagger.password') } }),
  );

  const config = new DocumentBuilder().setTitle('EchonRich Preview Test').setDescription(`
  Author: COOLMARVEL
  Github: https://github.com/coolmarvel/echonrich-preview
  Contact: 010-9254-1305 | marvel19971125@gmail.com`).setVersion('1.0.0').build();
  const customOptions: SwaggerCustomOptions = { swaggerOptions: { persistAuthorization: true } };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, customOptions);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}
bootstrap();
