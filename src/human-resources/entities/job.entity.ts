import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  job_id: string;

  @Column()
  job_title: string;

  @Column()
  min_salary: number;

  @Column()
  max_salary: number;

  @OneToMany(() => Employee, (employee) => employee.job)
  employees: Employee[];
}
