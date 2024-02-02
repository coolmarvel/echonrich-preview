import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Job } from 'src/job/entity/job.entity';
import { JobHistory } from 'src/job/entity/job-history.entity';
import { Department } from 'src/department/entity/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Job, JobHistory, Department])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
