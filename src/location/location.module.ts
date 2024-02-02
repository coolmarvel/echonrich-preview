import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entity/location.entity';
import { Country } from 'src/country/entity/country.entity';
import { Department } from 'src/department/entity/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Country, Department])],
})
export class LocationModule {}
