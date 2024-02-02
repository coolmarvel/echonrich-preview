import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { RegionModule } from './region/region.module';
import { LocationModule } from './location/location.module';
import { JobModule } from './job/job.module';
import { CountryModule } from './country/country.module';
import { DepartmentModule } from './department/department.module';
import mysqlConfig from './config/mysql.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [mysqlConfig] }),
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
        };

        return obj;
      },
    }),
    EmployeeModule,
    RegionModule,
    LocationModule,
    JobModule,
    CountryModule,
    DepartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
