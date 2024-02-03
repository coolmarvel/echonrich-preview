import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

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
