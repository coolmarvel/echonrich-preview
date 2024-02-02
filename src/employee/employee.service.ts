import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

  // TODO. 특정 사원의 현재 정보 조회 가능한 API
  async findEmployeeById(id: number) {
    return await this.employeeRepository.findOneBy({ employee_id: id });
  }

  // TODO. 모든 사원의 현재 정보 조회 가능한 API
  async findAllEmployees() {
    const page = 1;
    const size = 20;

    return await this.employeeRepository.find({ skip: (page - 1) * size, take: size });
  }
}
