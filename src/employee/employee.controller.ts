import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get(':id')
  async findEmployeeById() {
    return await this.employeeService.findEmployeeById();
  }

  @Get()
  async findAllEmployees() {
    return await this.employeeService.findAllEmployees();
  }
}
