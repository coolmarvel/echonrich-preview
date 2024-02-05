import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { DailyBoxOfficeReqDto } from './dto/req.dto';

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

    const result = this.httpService.get(this.url, { params });

    return result.pipe(map((response) => response.data));
  }
}
