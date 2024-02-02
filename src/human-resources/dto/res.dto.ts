import { ApiProperty } from '@nestjs/swagger';

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
