import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

export class MovieListReqDto {
  @ApiProperty({ required: false, description: '현재 페이지를 지정합니다.(default : “1”)' })
  @IsOptional()
  curPage?: string;

  @ApiProperty({ required: false, description: '결과 ROW 의 개수를 지정합니다.(default : “10”)' })
  @IsOptional()
  itemPerPage?: string;

  @ApiProperty({ required: false, description: '영화명으로 조회합니다. (UTF-8 인코딩)' })
  @IsOptional()
  movieNm?: string;

  @ApiProperty({ required: false, description: '감독명으로 조회합니다. (UTF-8 인코딩)' })
  @IsOptional()
  directorNm?: string;

  @ApiProperty({ required: false, description: 'YYYY형식의 조회시작 개봉연도를 입력합니다.' })
  @IsOptional()
  openStartDt?: string;

  @ApiProperty({ required: false, description: 'YYYY형식의 조회종료 개봉연도를 입력합니다.' })
  @IsOptional()
  openEndDt?: string;

  @ApiProperty({ required: false, description: 'YYYY형식의 조회시작 제작연도를 입력합니다.' })
  @IsOptional()
  prdtStartYear?: string;

  @ApiProperty({ required: false, description: 'YYYY형식의 조회종료 제작연도를 입력합니다.' })
  @IsOptional()
  prdtEndYear?: string;

  @ApiProperty({ required: false, description: 'N개의 국적으로 조회할 수 있으며, 국적코드는 공통코드 조회 서비스에서 “2204” 로서 조회된 국적코드입니다. (default : 전체)' })
  @IsOptional()
  repNationCd?: string;

  @ApiProperty({ required: false, description: 'N개의 영화유형코드로 조회할 수 있으며, 영화유형코드는 공통코드 조회 서비스에서 “2201”로서 조회된 영화유형코드입니다. (default: 전체)' })
  @IsOptional()
  movieTypeCd?: string;
}

export class MovieInfoReqDto {
  @ApiProperty({ required: true, example: '20124079', description: '영화코드를 지정합니다.' })
  @Transform((param) => String(param.value))
  movieCd: string;
}

export class CompanyListReqDto {
  @ApiPropertyOptional({ required: false, description: '현재 페이지를 지정합니다.(default : “1”)' })
  @Transform((param) => String(param.value))
  curPage: string;

  @ApiPropertyOptional({ required: false, description: '결과 ROW 의 개수를 지정합니다.(default : “10”)' })
  @Transform((param) => String(param.value))
  itemPerPage: string;

  @ApiPropertyOptional({ required: false, description: '영화사명으로 조회합니다.' })
  companyNm: string;

  @ApiPropertyOptional({ required: false, description: '대표자명으로 조회합니다.' })
  ceoNm: string;

  @ApiPropertyOptional({ required: false, description: 'N개의 분류코드로 조회할 수 있으며, 분류코드는 공통코드 조회 서비스에서 “2601” 로서 조회된 분류코드입니다.(default: 전체)' })
  companyPartCd: string;
}

export class CompanyInfoReqDto {
  @ApiPropertyOptional({ required: false, example: '20122497', description: '영화사코드를 지정합니다.' })
  @Transform((param) => String(param.value))
  companyCd: string;
}

export class PeopleListReqDto {
  @ApiPropertyOptional({ required: false, description: '현재 페이지를 지정합니다.(default : “1”)' })
  curPage: string;

  @ApiPropertyOptional({ required: false, description: '결과 ROW 의 개수를 지정합니다.(default : “10”)' })
  itemPerPage: string;

  @ApiPropertyOptional({ required: false, description: '영화인명으로 조회합니다.' })
  peopleNm: string;

  @ApiPropertyOptional({ required: false, description: '필모리스트로 조회합니다.' })
  filmoNames: string;
}
