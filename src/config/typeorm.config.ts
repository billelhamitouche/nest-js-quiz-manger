import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";



export default class TypeOrmConfig{

  static getOrmConfig(configService: ConfigService):TypeOrmModuleOptions{
    return{
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      //logging: true,
    }
  }
}

export const typeOrmConfigAsync :TypeOrmModuleAsyncOptions = {
    
    imports: [ConfigModule.forRoot()],
  
    useFactory : async(configService: ConfigService):  

    Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject:[ConfigService]
  
};