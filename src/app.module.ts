import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import typeormConfig from './config/typeorm.config';
import typeorm from './config/typeorm.config';

@Module({
  imports: [
  QuizModule,
 
  TypeOrmModule.forRootAsync(
    {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (
        {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ['src/migrations/*.ts'],
        autoLoadEntities: true,

      }
        )
    }
  ),
  UserModule
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

