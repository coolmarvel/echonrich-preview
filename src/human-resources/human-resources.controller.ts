import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';

@Controller('api')
export class HumanResourcesController {
  constructor(private readonly humanResourcesService: HumanResourcesService) {}

  @Get('employee')
  async getAllEmployees() {
    return await this.humanResourcesService.findAllEmployees();
  }

  @Get('employee/:id')
  async getEmployeeById(@Param('id') id: number) {
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
