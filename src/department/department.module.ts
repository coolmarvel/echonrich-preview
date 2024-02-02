import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entity/department.entity';
import { Location } from 'src/location/entity/location.entity';
import { Employee } from 'src/employee/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Location, Employee])],
})
export class DepartmentModule {}
