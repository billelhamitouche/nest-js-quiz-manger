import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
  QuizModule,
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
