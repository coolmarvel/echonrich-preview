import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { IsYYYYMMDD } from 'src/common/decorators/date-validate.decorator';

export class DailyBoxOfficeReqDto {
  @ApiProperty({ required: true, example: '20240204', description: '조회하고자 하는 날짜를 yyyymmdd 형식으로 입력합니다.' })
  @Transform((param) => String(param.value))
  @IsYYYYMMDD({ message: 'targetDt must be in yyyyMMdd format' })
  targetDt: string;

  @ApiProperty({ required: false, description: '결과 ROW 의 개수를 지정합니다.(default : “10”, 최대 : “10“)' })
  @IsOptional()
  itemPerPage?: string;

  @ApiProperty({
    required: false,
    description: '다양성 영화/상업영화를 구분지어 조회할 수 있습니다. “Y” : 다양성 영화 “N” : 상업영화 (default : 전체)',
  })
  @IsOptional()
  multiMovieYn?: string;

  @ApiProperty({ required: false, description: '한국/외국 영화별로 조회할 수 있습니다. “K: : 한국영화 “F” : 외국영화 (default : 전체)' })
  @IsOptional()
  repNationCd?: string;

  @ApiProperty({
    required: false,
    description: '상영지역별로 조회할 수 있으며, 지역코드는 공통코드 조회 서비스에서 “0105000000” 로서 조회된 지역코드입니다. (default : 전체)',
  })
  @IsOptional()
  wideAreaCd?: string;
}

export class WeeklyBoxOfficeReqDto {
  @ApiProperty({ required: true, example: '20240204', description: '조회하고자 하는 날짜를 yyyymmdd 형식으로 입력합니다.' })
  @Transform((param) => String(param.value))
  @IsYYYYMMDD({ message: 'targetDt must be in yyyyMMdd format' })
  targetDt: string;

  @ApiProperty({
    required: false,
    description: '주간/주말/주중을 선택 입력합니다 “0” : 주간 (월~일) “1” : 주말 (금~일) (default) “2” : 주중 (월~목)',
  })
  @IsOptional()
  weekGb?: string;

  @ApiProperty({ required: false, description: '결과 ROW 의 개수를 지정합니다.(default : “10”, 최대 : “10“)' })
  @IsOptional()
  itemPerPage?: string;

  @ApiProperty({
    required: false,
    description: '다양성 영화/상업영화를 구분지어 조회할 수 있습니다. “Y” : 다양성 영화 “N” : 상업영화 (default : 전체)',
  })
  @IsOptional()
  multiMovieYn?: string;

  @ApiProperty({ required: false, description: '한국/외국 영화별로 조회할 수 있습니다. “K: : 한국영화 “F” : 외국영화 (default : 전체)' })
  @IsOptional()
  repNationCd?: string;

  @ApiProperty({
    required: false,
    description: '상영지역별로 조회할 수 있으며, 지역코드는 공통코드 조회 서비스에서 “0105000000” 로서 조회된 지역코드입니다. (default : 전체)',
  })
  @IsOptional()
  wideAreaCd?: string;
}
