import { Employee } from 'src/employee/entity/employee.entity';
import { Job } from './job.entity';
import { Department } from 'src/department/entity/department.entity';

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('job_history')
export class JobHistory {
  @PrimaryColumn()
  employee_id: number;

  @ManyToOne(() => Employee, (employee) => employee.jobHistories)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
