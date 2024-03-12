import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

 
config();
 
const configService = new ConfigService();

export default new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ['src/migrations/*.ts'],

        
      });

      