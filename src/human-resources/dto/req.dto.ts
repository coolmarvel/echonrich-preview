import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class FindEmployeeReqDto {
  @ApiProperty({ required: true, example: 100 })
  @Transform((param) => Number(param.value))
  @IsNumber()
  id: number;
}

export class FindJobHistoryReqdto {
  @ApiProperty({ required: true, example: 101 })
  @Transform((param) => Number(param.value))
  @IsNumber()
  id: number;
}

export class UpdateEmployeeReqDto {
  @ApiProperty({ required: true, example: 100 })
  @Transform((param) => Number(param.value))
  @IsNumber()
  id: number;
}

export class UpdateEmployeeBodyDto {
  @ApiPropertyOptional({ required: false, example: 'COOLMARVEL' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ required: false, example: '515.123.4567' })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiPropertyOptional({ required: false, example: 10000 })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiPropertyOptional({ required: false, example: 'IT_PROG' })
  @IsOptional()
  @IsString()
  job_id?: string;

  @ApiPropertyOptional({ required: false, example: 50 })
  @IsOptional()
  @IsNumber()
  department_id?: number;
}

export class FindDepartmentReqDto {
  @ApiProperty({ required: true, example: 10 })
  @Transform((param) => Number(param.value))
  @IsNumber()
  id: number;
}

export class increaseSalaryReqDto {
  @ApiProperty({ required: true, example: 10 })
  @Transform((param) => Number(param.value))
  @IsNumber()
  id: number;
}

export class IncreaseSalaryBodyDto {
  @ApiProperty({ description: 'The rate(%) of salary increase', example: 10 })
  @IsNumber()
  @IsPositive()
  rate: number;
}
