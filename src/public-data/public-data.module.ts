import { Module } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { PublicDataController } from './public-data.controller';

@Module({
  providers: [PublicDataService],
  controllers: [PublicDataController]
})
export class PublicDataModule {}
