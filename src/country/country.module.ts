import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entity/country.entity';
import { Location } from 'src/location/entity/location.entity';
import { Region } from 'src/region/entity/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Location, Region])],
})
export class CountryModule {}
