import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanResourcesService } from './human-resources.service';
import { HumanResourcesController } from './human-resources.controller';
import { Employee } from './entities/employee.entity';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { Region } from './entities/region.entity';
import { Location } from './entities/location.entity';
import { Department } from './entities/department.entity';
import { Country } from './entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Job, JobHistory, Region, Location, Department, Country])],
  providers: [HumanResourcesService],
  controllers: [HumanResourcesController],
})
export class HumanResourcesModule {}
