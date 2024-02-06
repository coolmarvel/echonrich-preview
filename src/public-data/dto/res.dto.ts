import { ApiProperty } from '@nestjs/swagger';

class BoxOfficeList {
  @ApiProperty()
  rnum: string;

  @ApiProperty()
  rank: string;

  @ApiProperty()
  rankInten: string;

  @ApiProperty()
  rankOldAndNew: string;

  @ApiProperty()
  movieCd: string;

  @ApiProperty()
  movieNm: string;

  @ApiProperty()
  openDt: string;

  @ApiProperty()
  salesAmt: string;

  @ApiProperty()
  salesShare: string;

  @ApiProperty()
  salesInten: string;

  @ApiProperty()
  salesChange: string;

  @ApiProperty()
  salesAcc: string;

  @ApiProperty()
  audiCnt: string;

  @ApiProperty()
  audiInten: string;

  @ApiProperty()
  audiChange: string;

  @ApiProperty()
  audiAcc: string;

  @ApiProperty()
  scrnCnt: string;

  @ApiProperty()
  showCnt: string;
}

class DailyBoxOfficeResult {
  @ApiProperty()
  boxofficeType: string;

  @ApiProperty()
  showRange: string;

  @ApiProperty({ type: [BoxOfficeList] })
  dailyBoxOfficeList: BoxOfficeList[];
}

export class DailyBoxOfficeResDto {
  @ApiProperty()
  boxOfficeResult: DailyBoxOfficeResult;
}

class WeeklyBoxOfficeResult {
  @ApiProperty()
  boxofficeType: string;

  @ApiProperty()
  showRange: string;

  @ApiProperty()
  yearWeekTime: string;

  @ApiProperty({ type: [BoxOfficeList] })
  weeklyBoxOfficeList?: BoxOfficeList[];
}

export class WeeklyBoxOfficeResDto {
  @ApiProperty()
  boxOfficeResult: WeeklyBoxOfficeResult;
}

class Director {
  @ApiProperty()
  peopleNm: string;
}

class Company {
  @ApiProperty()
  companyCd: string;

  @ApiProperty()
  companyNm: string;
}

class MovieList {
  @ApiProperty()
  movieCd: string;

  @ApiProperty()
  movieNm: string;

  @ApiProperty()
  movieNmEn: string;

  @ApiProperty()
  prdtYear: string;

  @ApiProperty()
  openDt: string;

  @ApiProperty()
  typeNm: string;

  @ApiProperty()
  prdtStatNm: string;

  @ApiProperty()
  nationAlt: string;

  @ApiProperty()
  genreAlt: string;

  @ApiProperty()
  repNationNm: string;

  @ApiProperty()
  repGenreNm: string;

  @ApiProperty({ type: [Director] })
  directors: Director[];

  @ApiProperty({ type: [Company] })
  companys: Company[];
}

class MovieListResult {
  @ApiProperty()
  totCnt: number;

  @ApiProperty()
  source: string;

  @ApiProperty({ type: [MovieList] })
  movieList: MovieList[];
}

export class MovieListResDto {
  @ApiProperty()
  movieListResult: MovieListResult;
}
