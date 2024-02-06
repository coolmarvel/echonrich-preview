import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CompanyInfoReqDto, CompanyListReqDto, DailyBoxOfficeReqDto, MovieInfoReqDto, MovieListReqDto, PeopleListReqDto, WeeklyBoxOfficeReqDto } from './dto/req.dto';

@Injectable()
export class PublicDataService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private url: string = this.configService.get('public-data.url');
  private apiKey: string = this.configService.get('public-data.apiKey');

  async getDailyBoxOfficeList({ targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: DailyBoxOfficeReqDto) {
    const params = { key: this.apiKey, targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd };

    const result = this.httpService.get(this.url + 'boxoffice/searchDailyBoxOfficeList.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getWeeklyBoxOfficeList({ targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: WeeklyBoxOfficeReqDto) {
    const params = { key: this.apiKey, targetDt, weekGb, itemPerPage, multiMovieYn, repNationCd, wideAreaCd };

    const result = this.httpService.get(this.url + 'boxoffice/searchWeeklyBoxOfficeList.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getMovieList({ curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd }: MovieListReqDto) {
    const params = { key: this.apiKey, curPage, itemPerPage, movieNm, directorNm, openStartDt, openEndDt, prdtStartYear, prdtEndYear, repNationCd, movieTypeCd };

    const result = this.httpService.get(this.url + 'movie/searchMovieList.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getMovieInfo({ movieCd }: MovieInfoReqDto) {
    const params = { key: this.apiKey, movieCd };

    const result = this.httpService.get(this.url + 'movie/searchMovieInfo.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getCompanyList({ curPage, itemPerPage, companyNm, ceoNm, companyPartCd }: CompanyListReqDto) {
    const params = { key: this.apiKey, curPage, itemPerPage, companyNm, ceoNm, companyPartCd };

    const result = this.httpService.get(this.url + 'company/searchCompanyList.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getCompanyInfo({ companyCd }: CompanyInfoReqDto) {
    const params = { key: this.apiKey, companyCd };

    const result = this.httpService.get(this.url + 'company/searchCompanyInfo.json', { params });

    return result.toPromise().then((response) => response.data);
  }

  async getPeopleList({ curPage, itemPerPage, peopleNm, filmoNames }: PeopleListReqDto) {
    const params = { key: this.apiKey, curPage, itemPerPage, peopleNm, filmoNames };

    const result = this.httpService.get(this.url + 'people/searchPeopleList.json', { params });

    return result.toPromise().then((response) => response.data);
  }
}
