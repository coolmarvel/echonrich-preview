import { Controller, Get, Query } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { MovieListReqDto, DailyBoxOfficeReqDto, WeeklyBoxOfficeReqDto, MovieInfoReqDto, CompanyListReqDto, CompanyInfoReqDto, PeopleListReqDto, PeopleInfoReqDto } from './dto/req.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { CompanyInfoResDto, CompanyListResDto, DailyBoxOfficeResDto, MovieInfoResDto, MovieListResDto, PeopleInfoResDto, PeopleListResDto, WeeklyBoxOfficeResDto } from './dto/res.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { ApiGetResponse } from 'src/common/decorators/swagger.decorator';

@ApiTags('Public-Datas')
@ApiExtraModels(DailyBoxOfficeResDto, WeeklyBoxOfficeResDto, MovieListResDto, MovieInfoResDto, CompanyListResDto, CompanyInfoResDto, PeopleListResDto, PeopleInfoResDto, PageResDto)
@Controller('api')
export class PublicDataController {
  constructor(private readonly publicDataService: PublicDataService) {}

  @ApiGetResponse(DailyBoxOfficeResDto)
  @Get('boxoffice/daily')
  async getDailyBoxOfficeList(@Query() { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: DailyBoxOfficeReqDto): Promise<DailyBoxOfficeResDto> {
    return await this.publicDataService.getDailyBoxOfficeList({ targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }

  @ApiGetResponse(WeeklyBoxOfficeResDto)
  @Get('boxoffice/weekly')
  async getWeeklyBoxOfficeList(@Query() { targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: WeeklyBoxOfficeReqDto): Promise<WeeklyBoxOfficeResDto> {
    return await this.publicDataService.getWeeklyBoxOfficeList({ targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }

  @ApiGetResponse(MovieListResDto)
  @Get('movie/list')
  async getMovieList(@Query() { curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd }: MovieListReqDto): Promise<MovieListResDto> {
    return await this.publicDataService.getMovieList({ curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd });
  }

  @ApiGetResponse(MovieInfoResDto)
  @Get('movie/info')
  async getMovieInfo(@Query() { movieCd }: MovieInfoReqDto): Promise<MovieInfoResDto> {
    return await this.publicDataService.getMovieInfo({ movieCd });
  }

  @ApiGetResponse(CompanyListResDto)
  @Get('company/list')
  async getCompanyList(@Query() { curPage, itemPerPage, companyNm, ceoNm, companyPartCd }: CompanyListReqDto): Promise<CompanyListResDto> {
    return await this.publicDataService.getCompanyList({ curPage, itemPerPage, companyNm, ceoNm, companyPartCd });
  }

  @ApiGetResponse(CompanyInfoResDto)
  @Get('compnay/info')
  async getCompanyInfo(@Query() { companyCd }: CompanyInfoReqDto): Promise<CompanyInfoResDto> {
    return await this.publicDataService.getCompanyInfo({ companyCd });
  }

  @ApiGetResponse(PeopleListResDto)
  @Get('people/list')
  async getPeopleList(@Query() { curPage, itemPerPage, peopleNm, filmoNames }: PeopleListReqDto): Promise<PeopleListResDto> {
    return await this.publicDataService.getPeopleList({ curPage, itemPerPage, peopleNm, filmoNames });
  }

  @ApiGetResponse(PeopleInfoResDto)
  @Get('people/info')
  async getPeopleInfo(@Query() { peopleCd }: PeopleInfoReqDto): Promise<PeopleInfoResDto> {
    return await this.publicDataService.getPeopleInfo({ peopleCd });
  }
}
