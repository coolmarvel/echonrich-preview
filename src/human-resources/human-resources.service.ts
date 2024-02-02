import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { JobHistory } from './entities/job-history.entity';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class HumanResourcesService {
  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
    @InjectRepository(JobHistory) private jobHistoryRepository: Repository<JobHistory>,
    @InjectRepository(Department) private departmentRepository: Repository<Department>,
  ) {}

  // TODO. 특정 사원의 현재 정보 조회 가능한 API
  async findEmployeeById(employee_id: number) {
    return await this.employeeRepository.findOneBy({ employee_id });
  }

  // TODO. 모든 사원의 현재 정보 조회 가능한 API
  async findAllEmployees() {
    const page = 1;
    const size = 20;

    return await this.employeeRepository.find({ skip: (page - 1) * size, take: size });
  }

  // TODO. 특정 사원의 이력 정보 조회 API
  async findJobHisotryById(employee_id: number) {
    return await this.jobHistoryRepository.find({
      where: { employee: { employee_id } },
      relations: ['job', 'department'],
    });
  }

  // TODO. 부서 및 위치 정보 조회 API
  async findAllDepartmentsWithDetails() {
    return await this.departmentRepository.find({
      relations: ['manager', 'location', 'location.country', 'location.country.region'],
    });
  }

  // TODO. 특정 부서의 급여 인상 API
  async increaseSalary(department_id: number, rate: number) {
    const employees = await this.employeeRepository.find({ where: { department: { department_id } } });

    employees.forEach((employee) => {
      employee.salary *= 1 + rate;
    });

    await this.employeeRepository.save(employees);

    return true;
  }
}
