import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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

  @ApiPropertyOptional()
  peopleNmEn: string;
}

class Company {
  @ApiProperty()
  companyCd: string;

  @ApiProperty()
  companyNm: string;

  @ApiPropertyOptional()
  companyNmEn?: string;

  @ApiPropertyOptional()
  companyPartNm?: string;

  @ApiPropertyOptional()
  companyPartNames?: string;

  @ApiPropertyOptional()
  ceoNm?: string;

  @ApiPropertyOptional()
  filmoNames?: string;
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

class Nation {
  @ApiProperty()
  nationNm: string;
}

class Genre {
  @ApiProperty()
  genreNm: string;
}

class Actor {
  @ApiProperty()
  peopleNm: string;

  @ApiProperty()
  peopleNmEn: string;

  @ApiProperty()
  cast: string;

  @ApiProperty()
  castEn: string;
}

class ShowType {
  @ApiProperty()
  showTypeGroupNm: string;

  @ApiProperty()
  showTypeNm: string;
}

class Audit {
  @ApiProperty()
  auditNo: string;

  @ApiProperty()
  watchGradeNm: string;
}

class Staff {
  @ApiProperty()
  peopleNm: string;

  @ApiProperty()
  peopleNmEn: string;

  @ApiProperty()
  staffRoleNm: string;
}

class MovieInfo {
  @ApiProperty()
  movieCd: string;

  @ApiProperty()
  movieNm: string;

  @ApiProperty()
  movieNmEn: string;

  @ApiProperty()
  movieNmOg: string;

  @ApiProperty()
  showTm: string;

  @ApiProperty()
  prdtYear: string;

  @ApiProperty()
  openDt: string;

  @ApiProperty()
  prdtStatNm: string;

  @ApiProperty()
  typeNm: string;

  @ApiProperty({ type: [Nation] })
  nations: Nation[];

  @ApiProperty({ type: [Genre] })
  genres: Genre[];

  @ApiProperty({ type: [Director] })
  directors: Director[];

  @ApiProperty({ type: [Actor] })
  actors: Actor[];

  @ApiProperty({ type: [ShowType] })
  showTypes: ShowType[];

  @ApiProperty({ type: [Company] })
  companys: Company[];

  @ApiProperty({ type: [Audit] })
  audits: Audit[];

  @ApiProperty({ type: [Staff] })
  staffs: Staff[];
}

class MovieInfoResult {
  @ApiProperty()
  movieInfo: MovieInfo;

  @ApiProperty()
  source: string;
}

export class MovieInfoResDto {
  @ApiProperty()
  movieInfoResult: MovieInfoResult;
}

class CompanyListResult {
  @ApiProperty()
  totCnt: number;

  @ApiProperty({ type: [Company] })
  companyList: Company[];

  @ApiProperty()
  source: string;
}

export class CompanyListResDto {
  @ApiProperty()
  companyListResult: CompanyListResult;
}

class CompanyPart {
  @ApiProperty()
  companyPartNm: string;
}

class Filmo {
  @ApiProperty()
  movieCd: string;

  @ApiProperty()
  movieNm: string;

  @ApiProperty()
  companyPartNm: string;
}

class CompanyInfo {
  @ApiProperty()
  companyCd: string;

  @ApiProperty()
  companyNm: string;

  @ApiProperty()
  companyNmEn: string;

  @ApiProperty()
  ceoNm: string;

  @ApiProperty({ type: [CompanyPart] })
  parts: CompanyPart[];

  @ApiProperty({ type: [Filmo] })
  filmos: Filmo[];
}

export class CompanyInfoResDto {
  @ApiProperty()
  companyInfo: CompanyInfo;
}
