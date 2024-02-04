import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { HealthModule } from './health/health.module';
import mysqlConfig from './config/mysql.config';
import swaggerConfig from './config/swagger.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [mysqlConfig, swaggerConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        let obj: TypeOrmModuleOptions = {
          type: 'mysql',
          host: configService.get('mysql.host'),
          port: configService.get('mysql.port'),
          database: configService.get('mysql.database'),
          username: configService.get('mysql.username'),
          password: configService.get('mysql.password'),
          autoLoadEntities: true,
          synchronize: false,
          timezone: '+09:00',
        };

        return obj;
      },
    }),
    HumanResourcesModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
