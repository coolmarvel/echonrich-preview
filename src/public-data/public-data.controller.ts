import { Controller, Get, Query } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { DailyBoxOfficeReqDto } from './dto/req.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { DailyBoxOfficeResDto } from './dto/res.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { ApiGetResponse } from 'src/common/decorators/swagger.decorator';

@ApiTags('Public-Datas')
@ApiExtraModels(DailyBoxOfficeResDto, PageResDto)
@Controller('api/public')
export class PublicDataController {
  constructor(private readonly publicDataService: PublicDataService) {}

  @ApiGetResponse(DailyBoxOfficeResDto)
  @Get('getDailyBoxOfficeList')
  async getDailyBoxOfficeList(
    @Query() { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd }: DailyBoxOfficeReqDto,
  ): Promise<DailyBoxOfficeResDto> {
    return await this.publicDataService.getDailyBoxOfficeList({ targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd });
  }
}
