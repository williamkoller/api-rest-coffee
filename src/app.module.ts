import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envFolderPath, { envs } from './configs/env';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFolderPath.folder,
      load: [envs],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('typeorm.host'),
        port: configService.get('typeorm.port'),
        username: configService.get('typeorm.username'),
        password: configService.get('typeorm.password'),
        database: configService.get('typeorm.database'),
        synchronize: true,
        logging: false,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
