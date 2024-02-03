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
  async findAllEmployees(page: number, size: number) {
    return await this.employeeRepository.find({ skip: (page - 1) * size, take: size });
  }

  // TODO. 특정 사원의 이력 정보 조회 API
  async findJobHisotryById(employee_id: number, page: number, size: number) {
    const history = await this.jobHistoryRepository.find({
      where: { employee: { employee_id } },
      relations: ['employee', 'job', 'department'],
      skip: (page - 1) * size,
      take: size,
    });

    return history;
  }

  // TODO. 부서 및 위치 정보 조회 API
  async findAllDepartmentsWithDetails(page: number, size: number) {
    return await this.departmentRepository.find({
      relations: ['manager', 'employees', 'location', 'location.country', 'location.country.region'],
      order: { department_id: 'ASC' },
      skip: (page - 1) * size,
      take: size,
    });
  }

  async findDepartmentWithDetails(department_id: number) {
    return await this.departmentRepository.find({
      where: { department_id },
      relations: ['manager', 'employees', 'location', 'location.country', 'location.country.region'],
      order: { department_id: 'ASC' },
    });
  }

  // TODO. 특정 부서의 급여 인상 API
  async increaseSalary(department_id: number, rate: number) {
    const queryRunner = this.employeeRepository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const employees = await queryRunner.manager.find(Employee, { where: { department: { department_id } } });
      if (!employees || employees.length === 0) throw new Error('해당 부서의 직원이 존재하지 않습니다.');

      employees.forEach((employee) => {
        const salary = Number(employee.salary);
        const increased = salary * (rate / 100);
        const increasedSalary = increased + salary;
        const MAX_SALARY = 999999.99; // DECIMAL(8,2)의 MAX

        if (increasedSalary > MAX_SALARY) employee.salary = MAX_SALARY;
        else employee.salary = increasedSalary;
      });

      await queryRunner.manager.save(Employee, employees);
      await queryRunner.commitTransaction();

      return employees;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error('급여 인상 처리 중 오류가 발생했습니다. ' + error.message);
    } finally {
      await queryRunner.release();
    }
  }
}
