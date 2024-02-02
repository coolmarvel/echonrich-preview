import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { JobHistory } from './entity/job-history.entity';
import { Employee } from 'src/employee/entity/employee.entity';
import { Department } from 'src/department/entity/department.entity';
import { JobService } from './job.service';
import { JobController } from './job.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobHistory, Employee, Department])],
  providers: [JobService],
  controllers: [JobController],
})
export class JobModule {}
