import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { ApiTokenCheckMiddleware } from './common/middleware/api-token-check.middleware';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    QuizModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOption),
    EventEmitterModule.forRoot(),
    UserModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard
    // }
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiTokenCheckMiddleware).forRoutes({path : '*',method: RequestMethod.GET})
  
  } 


}

