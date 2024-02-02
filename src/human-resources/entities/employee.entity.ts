import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from './job.entity';
import { Department } from './department.entity';
import { JobHistory } from './job-history.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column()
  hire_date: Date;

  @ManyToOne(() => Job, (job) => job.employees)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Column({ type: 'decimal', nullable: true })
  salary: number;

  @Column({ type: 'decimal', nullable: true })
  commission_pct: number;

  @ManyToOne(() => Employee, (employee) => employee.directReports)
  @JoinColumn({ name: 'manager_id' })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReports: Employee[];

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => Department, (department) => department.manager)
  managedDepartments: Department[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.employee)
  jobHistories: JobHistory[];
}
