import { Module } from '@nestjs/common';
import { PublicDataService } from './public-data.service';
import { PublicDataController } from './public-data.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.registerAsync({ useFactory: () => ({ timeout: 5000, maxRedirects: 5 }) })],
  providers: [PublicDataService],
  controllers: [PublicDataController],
})
export class PublicDataModule {}
