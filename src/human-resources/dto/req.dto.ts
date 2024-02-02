import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

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
