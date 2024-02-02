import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { JobHistory } from './entities/job-history.entity';
import { DataSource, Repository, getManager } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class HumanResourcesService {
  constructor(
    private dataSource: DataSource,
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
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const history = await queryRunner.query(
        `SELECT
          jh.employee_id,
          jh.start_date,
          jh.end_date,
          jh.job_id,
          j.job_title,
          j.min_salary,
          j.max_salary,
          d.department_id,
          d.department_name
         FROM job_history jh
         JOIN jobs j ON jh.job_id = j.job_id
         JOIN departments d ON jh.department_id = d.department_id
         WHERE jh.employee_id = ? LIMIT ? OFFSET ?`,
        [employee_id, size, (page - 1) * size],
      );

      await queryRunner.commitTransaction();

      return history;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }

    // const history = await this.jobHistoryRepository.find({
    //   where: { employee: { employee_id } },
    //   relations: ['job', 'department'],
    //   skip: (page - 1) * size,
    //   take: size,
    // });

    // return history;
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
      const salary = Number(employee.salary);
      const increased = salary * rate;
      const increasedSalary = salary + increased;

      employee.salary = increasedSalary;
    });

    await this.employeeRepository.save(employees);

    return true;
  }
}
