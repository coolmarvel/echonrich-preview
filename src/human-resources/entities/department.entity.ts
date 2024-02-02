import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Location } from './location.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column()
  department_name: string;

  @ManyToOne(() => Location, (location) => location.departments)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  @ManyToOne(() => Employee, (employee) => employee.managedDepartments)
  @JoinColumn({ name: 'manager_id' })
  manager: Employee;
}
