import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('port');
  await app.listen(port, () => logger.log(`server running port: ${port}`));
}
bootstrap();
