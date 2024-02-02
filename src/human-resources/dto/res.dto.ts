import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Job } from '../entities/job.entity';
import { Department } from '../entities/department.entity';
import { Employee } from '../entities/employee.entity';

export class FindEmployeeResDto {
  @ApiProperty({ required: true })
  employee_id: number;

  @ApiProperty({ required: true })
  first_name: string;

  @ApiProperty({ required: true })
  last_name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone_number: string;

  @ApiProperty({ required: true })
  hire_date: Date;

  @ApiProperty({ required: true })
  salary: number;

  @ApiProperty({ required: true })
  commission_pct: number;
}

export class FindJobHistoryResdto {
  @ApiProperty({ required: true })
  employee_id: number;

  @ApiProperty({ required: true })
  start_date: Date;

  @ApiProperty({ required: true })
  end_date: Date;

  @ApiProperty({ required: true })
  job: Job;

  @ApiProperty({ required: true })
  department: Department;
}
