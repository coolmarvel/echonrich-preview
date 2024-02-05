import { Controller, Get } from '@nestjs/common';
import { PublicDataService } from './public-data.service';

@Controller('public-data')
export class PublicDataController {
  constructor(private readonly publicDataService: PublicDataService) {}

  @Get()
  async getDailyBoxOfficeList(targetDt: string, itemPerPage: string, multiMovieYn: string, repNationCd: string, wideAreaDc: string) {
    return await this.publicDataService.getDailyBoxOfficeList(
      (targetDt = '20240101'),
      (itemPerPage = '10'),
      (multiMovieYn = 'N'),
      (repNationCd = 'K'),
      (wideAreaDc = '0105000000'),
    );
  }
}
