import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class PublicDataService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private url: string = this.configService.get('public-data.url');
  private apiKey: string = this.configService.get('public-data.apiKey');

  async getDailyBoxOfficeList(targetDt: string, itemPerPage: string, multiMovieYn: string, repNationCd: string, wideAreaDc: string) {
    const response = this.httpService.get(this.url, { params: { key: this.apiKey, targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaDc } });

    return response.pipe(map((res) => res.data));
  }
}
