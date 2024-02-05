import { ApiProperty } from '@nestjs/swagger';

interface DailyBoxOfficeResult {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList?: BoxOfficeList[];
}

interface BoxOfficeList {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}

export class DailyBoxOfficeResDto {
  @ApiProperty({ required: true })
  boxOfficeResult: DailyBoxOfficeResult;
}

interface WeeklyBoxOfficeResult {
  boxofficeType: string;
  showRange: string;
  yearWeekTime: string;
  weeklyBoxOfficeList?: BoxOfficeList[];
}

export class WeeklyBoxOfficeResDto {
  @ApiProperty({ required: true })
  boxOfficeResult: WeeklyBoxOfficeResult;
}
