import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { FindEmployeeResDto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse } from 'src/common/decorators/swagger.decorator';
import { FindEmployeeReqDto } from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';

@ApiTags('Human-Resources')
@ApiExtraModels(FindEmployeeResDto)
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
  async getEmployeeById(@Param() { id }: FindEmployeeReqDto): Promise<FindEmployeeResDto> {
    return await this.humanResourcesService.findEmployeeById(id);
  }

  @Get('employee/:id/history')
  async getJobHisotryById(@Param('id') id: number) {
    return await this.humanResourcesService.findJobHisotryById(id);
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
