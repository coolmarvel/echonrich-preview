import { Controller, Get, Query } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { MovieListReqDto, DailyBoxOfficeReqDto, WeeklyBoxOfficeReqDto, MovieInfoReqDto, CompanyListReqDto } from './dto/req.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { CompanyListResDto, DailyBoxOfficeResDto, MovieInfoResDto, MovieListResDto, WeeklyBoxOfficeResDto } from './dto/res.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { ApiGetResponse } from 'src/common/decorators/swagger.decorator';

@ApiTags('Public-Datas')
@ApiExtraModels(DailyBoxOfficeResDto, WeeklyBoxOfficeResDto, MovieListResDto, MovieInfoResDto, CompanyListResDto, PageResDto)
@Controller('api/public')
export class PublicDataController {
  constructor(private readonly publicDataService: PublicDataService) {}

  @ApiGetResponse(DailyBoxOfficeResDto)
  @Get('getDailyBoxOfficeList')
  async getDailyBoxOfficeList(@Query() { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: DailyBoxOfficeReqDto): Promise<DailyBoxOfficeResDto> {
    return await this.publicDataService.getDailyBoxOfficeList({ targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }

  @ApiGetResponse(WeeklyBoxOfficeResDto)
  @Get('getWeeklyBoxOfficeList')
  async getWeeklyBoxOfficeList(@Query() { targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: WeeklyBoxOfficeReqDto): Promise<WeeklyBoxOfficeResDto> {
    return await this.publicDataService.getWeeklyBoxOfficeList({ targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }

  @ApiGetResponse(MovieListResDto)
  @Get('getMovieList')
  async getMovieList(@Query() { curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd }: MovieListReqDto): Promise<MovieListResDto> {
    return await this.publicDataService.getMovieList({ curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd });
  }

  @ApiGetResponse(MovieInfoResDto)
  @Get('getMovieInfo')
  async getMovieInfo(@Query() { movieCd }: MovieInfoReqDto): Promise<MovieInfoResDto> {
    return await this.publicDataService.getMovieInfo({ movieCd });
  }

  @ApiGetResponse(CompanyListResDto)
  @Get('getCompanyList')
  async getCompanyList(@Query() { curPage, itemPerPage, companyNm, ceoNm, companyPartCd }: CompanyListReqDto): Promise<CompanyListResDto> {
    return await this.publicDataService.getCompanyList({ curPage, itemPerPage, companyNm, ceoNm, companyPartCd });
  }
}
