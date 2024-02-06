import { registerAs } from '@nestjs/config';

export default registerAs('public-data', () => ({
  apiKey: process.env.KOFIC_API_KEY,
  url: process.env.KOFIC_API_URL,
}));
