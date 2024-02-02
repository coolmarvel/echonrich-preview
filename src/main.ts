import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('EchonRich Preview Test').setDescription('').setVersion('1.0.0').build();
  const customOptions: SwaggerCustomOptions = { swaggerOptions: { persistAuthorization: true } };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(3000);
}
bootstrap();
