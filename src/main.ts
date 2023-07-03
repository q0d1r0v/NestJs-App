// imports
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// use method
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
