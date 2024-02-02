import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

  // TODO. 특정 사원의 현재 정보 조회 가능한 API
  async findEmployeeById() {
    return 'findEmployeeById';
  }

  // TODO. 모든 사원의 현재 정보 조회 가능한 API
  async findAllEmployees() {
    return 'findAllEmployees';
  }
}
