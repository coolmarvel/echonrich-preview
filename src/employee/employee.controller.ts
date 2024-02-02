import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get(':id')
  async findEmployeeById(@Param('id') id: number) {
    return await this.employeeService.findEmployeeById(id);
  }

  @Get()
  async findAllEmployees() {
    return await this.employeeService.findAllEmployees();
  }
}
