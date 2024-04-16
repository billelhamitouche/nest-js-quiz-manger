import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';

 
export const dataSourceOption : DataSourceOptions = {
          
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          database: 'quiz',
          password: 'root',
          entities: ["dist/**/*.entity.js"],
          migrations: ['dist/src/migrations/*.js'],
          synchronize: false,      


}

const dataSource = new DataSource(dataSourceOption);

export default dataSource;


// dotenvConfig({ path: '.env' });
 
// const config= {
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: parseInt(process.env.DB_PORT, 10),
//         username: process.env.DB_USERNAME,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//         entities: ["dist/**/*.entity{.ts,.js}"],
//         migrations: ['src/migrations/*.ts'],
//         autoLoadEntities: true,
//         synchronize: false,      
//       };

//       export default registerAs('typeorm', () => config)
//       export const connectionSource = new DataSource(config as DataSourceOptions);