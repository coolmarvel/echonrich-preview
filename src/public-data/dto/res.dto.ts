import { ApiProperty } from '@nestjs/swagger';

interface BoxOfficeResult {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList?: DailyBoxOfficeList[];
}

interface DailyBoxOfficeList {
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
  boxOfficeResult: BoxOfficeResult;
}
