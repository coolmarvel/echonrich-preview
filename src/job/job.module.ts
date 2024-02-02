import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { JobHistory } from './entity/job-history.entity';
import { Employee } from 'src/employee/entity/employee.entity';
import { Department } from 'src/department/entity/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobHistory, Employee, Department])],
})
export class JobModule {}
