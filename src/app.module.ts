import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { DataSource, TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { config } from 'process';
import { dataSourceOption } from './config/typeorm-config';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(dataSourceOption),
    UserModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

