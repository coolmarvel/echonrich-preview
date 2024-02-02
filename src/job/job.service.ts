import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { Repository } from 'typeorm';
import { JobHistory } from './entity/job-history.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private jobRepository: Repository<Job>,
    @InjectRepository(JobHistory) private jobHistoryRepository: Repository<JobHistory>,
  ) {}

  // TODO. 특정 사원의 이력 정보 조회 API
  async findJobHisotryById(id: number) {
    return await this.jobHistoryRepository.find({
      where: { employee: { employee_id: id } },
      relations: ['job', 'department'],
    });
  }
}
