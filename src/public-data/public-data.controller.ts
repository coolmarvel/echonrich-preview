import { Controller, Get, Query } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { DailyBoxOfficeReqDto } from './dto/req.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Public-Datas')
@Controller('api/public')
export class PublicDataController {
  constructor(private readonly publicDataService: PublicDataService) {}

  @Get('getDailyBoxOfficeList')
  async getDailyBoxOfficeList(@Query() { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: DailyBoxOfficeReqDto) {
    return await this.publicDataService.getDailyBoxOfficeList({ targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }
}
