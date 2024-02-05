import { registerAs } from '@nestjs/config';

export default registerAs('public-data', () => ({
  apiKey: process.env.KOPIC_API_KEY,
  url: process.env.KOPIC_API_URL,
}));
