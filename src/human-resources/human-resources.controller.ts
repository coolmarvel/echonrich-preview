import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { FindDepartmentResDto, FindEmployeeResDto, FindJobHistoryResdto, IncreaseSalaryResDto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse } from 'src/common/decorators/swagger.decorator';
import { FindDepartmentReqDto, FindEmployeeReqDto, FindJobHistoryReqdto, IncreaseSalaryBodyDto, increaseSalaryReqDto } from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';

@ApiTags('Human-Resources')
@ApiExtraModels(FindEmployeeResDto, FindJobHistoryResdto, FindDepartmentResDto, IncreaseSalaryResDto, PageResDto)
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

  @ApiGetItemsResponse(FindDepartmentResDto)
  @Get('department')
  async getAllDepartmentsWithDetails(@Query() { page, size }: PageReqDto): Promise<FindDepartmentResDto[]> {
    return await this.humanResourcesService.findAllDepartmentsWithDetails(page, size);
  }

  @ApiGetResponse(FindDepartmentResDto)
  @Get('department/:id')
  async getDepartmentWithDetails(@Query() { id }: FindDepartmentReqDto): Promise<FindDepartmentResDto[]> {
    return await this.humanResourcesService.findDepartmentWithDetails(id);
  }

  @ApiGetResponse(IncreaseSalaryResDto)
  @Post('department/:id/increase-salary')
  async portIncreaseSalary(@Query() { id }: increaseSalaryReqDto, @Body() { rate }: IncreaseSalaryBodyDto): Promise<IncreaseSalaryResDto[]> {
    return await this.humanResourcesService.increaseSalary(id, rate);
  }
}
