import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PublicDataService {
  constructor(private configService: ConfigService) {}

  private url: string = this.configService.get('public-data.url');
  private apiKey: string = this.configService.get('public-data.apiKey');

  async getDailyBoxOfficeRank() {
    console.log(this.url);
    console.log(this.apiKey);
    // await fetch(`${this.url}?`);
  }
}
