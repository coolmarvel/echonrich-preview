import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { FindEmployeeResDto, FindJobHistoryResdto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse } from 'src/common/decorators/swagger.decorator';
import { FindEmployeeReqDto, FindJobHistoryReqdto } from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';

@ApiTags('Human-Resources')
@ApiExtraModels(FindEmployeeResDto, FindJobHistoryResdto, PageResDto)
@Controller('api')
export class HumanResourcesController {
  constructor(private readonly humanResourcesService: HumanResourcesService) {}

  @ApiGetItemsResponse(FindEmployeeResDto)
  @Get('employee')
  async getAllEmployees(@Query() { page, size }: PageReqDto): Promise<FindEmployeeResDto[]> {
    return await this.humanResourcesService.findAllEmployees(page, size);
  }

  @ApiGetResponse(FindEmployeeResDto)
  @Get('employee/:id')
  async getEmployeeById(@Query() { id }: FindEmployeeReqDto): Promise<FindEmployeeResDto> {
    return await this.humanResourcesService.findEmployeeById(id);
  }

  @ApiGetItemsResponse(FindJobHistoryResdto)
  @Get('employee/:id/history')
  async getJobHisotryById(@Query() { id }: FindJobHistoryReqdto, @Query() { page, size }: PageReqDto): Promise<FindJobHistoryResdto[]> {
    return await this.humanResourcesService.findJobHisotryById(id, page, size);
  }

  @Get('department')
  async getAllDepartmentsWithDetails() {
    return await this.humanResourcesService.findAllDepartmentsWithDetails();
  }

  @Post('department/:id/increase-salary')
  async portIncreaseSalary(@Param('id') id: number, @Body('rate') rate: number) {
    return await this.humanResourcesService.increaseSalary(id, (rate = 10));
  }
}
