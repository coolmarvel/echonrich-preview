import { Controller, Get, Param } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get(':id')
  async findJobHisotryById(@Param('id') id: number) {
    return await this.jobService.findJobHisotryById(id);
  }
}
