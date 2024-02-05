import { registerAs } from '@nestjs/config';

export default registerAs('api-key', () => ({
  API_KEY: process.env.KOPIC_API_KEY,
}));
