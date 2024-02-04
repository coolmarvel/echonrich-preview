import { Body, Controller, Get, Param, Post, Query, UseFilters } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindDepartmentResDto, FindEmployeeResDto, FindJobHistoryResdto, IncreaseSalaryResDto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse } from 'src/common/decorators/swagger.decorator';
import {
  FindDepartmentReqDto,
  FindEmployeeReqDto,
  FindJobHistoryReqdto,
  IncreaseSalaryBodyDto,
  UpdateEmployeeBodyDto,
  UpdateEmployeeReqDto,
  increaseSalaryReqDto,
} from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';

@ApiTags('Human-Resources')
@ApiExtraModels(FindEmployeeResDto, FindJobHistoryResdto, FindDepartmentResDto, IncreaseSalaryResDto, PageResDto)
@Controller('api')
export class HumanResourcesController {
  constructor(private readonly humanResourcesService: HumanResourcesService) {}

  @ApiOperation({ summary: '모든 사원 정보 조회 API' })
  @ApiGetItemsResponse(FindEmployeeResDto)
  @Get('employee')
  async getAllEmployees(@Query() { page, size }: PageReqDto): Promise<FindEmployeeResDto[]> {
    return await this.humanResourcesService.findAllEmployees(page, size);
  }

  @ApiOperation({ summary: '특정 사원의 현재 정보 조회 API' })
  @ApiGetResponse(FindEmployeeResDto)
  @Get('employee/:id')
  async getEmployeeById(@Param() { id }: FindEmployeeReqDto): Promise<FindEmployeeResDto> {
    return await this.humanResourcesService.findEmployeeById(id);
  }

  @ApiOperation({ summary: '특정 사원의 이력 정보 조회 API' })
  @ApiGetItemsResponse(FindJobHistoryResdto)
  @Get('employee/:id/history')
  async getJobHisotryById(@Param() { id }: FindJobHistoryReqdto, @Query() { page, size }: PageReqDto): Promise<FindJobHistoryResdto[]> {
    return await this.humanResourcesService.findJobHisotryById(id, page, size);
  }

  @ApiOperation({ summary: '특정 사원의 정보 업데이트 API' })
  @Post('employee/:id/update')
  async updateEmployeeById(@Param() { id }: UpdateEmployeeReqDto, @Body() updateEmployeeBodyDto: UpdateEmployeeBodyDto) {
    return await this.humanResourcesService.updateEmployeeById(id, updateEmployeeBodyDto);
  }

  @ApiOperation({ summary: '모든 부서 및 위치 정보 조회 API' })
  @ApiGetItemsResponse(FindDepartmentResDto)
  @Get('department')
  async getAllDepartmentsWithDetails(@Query() { page, size }: PageReqDto): Promise<FindDepartmentResDto[]> {
    return await this.humanResourcesService.findAllDepartmentsWithDetails(page, size);
  }

  @ApiOperation({ summary: '특정 부서 및 위치 정보 조회 API' })
  @ApiGetResponse(FindDepartmentResDto)
  @Get('department/:id')
  async getDepartmentWithDetails(@Param() { id }: FindDepartmentReqDto): Promise<FindDepartmentResDto[]> {
    return await this.humanResourcesService.findDepartmentWithDetails(id);
  }

  @ApiOperation({ summary: '특정 부서의 급여 인상 API' })
  @ApiGetResponse(IncreaseSalaryResDto)
  @Post('department/:id/increase-salary')
  async portIncreaseSalary(@Param() { id }: increaseSalaryReqDto, @Body() { rate }: IncreaseSalaryBodyDto): Promise<IncreaseSalaryResDto[]> {
    return await this.humanResourcesService.increaseSalary(id, rate);
  }
}
