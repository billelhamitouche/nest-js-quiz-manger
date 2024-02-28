import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typOrmConfig :TypeOrmModuleOptions = {
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'quiz',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      //logging: true,

}