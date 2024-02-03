import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from './job.entity';
import { Employee } from './employee.entity';
import { Department } from './department.entity';

@Entity('job_history')
export class JobHistory {
  @PrimaryGeneratedColumn('increment')
  job_hisotry_id: number;

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
