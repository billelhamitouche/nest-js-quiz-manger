import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { promises } from 'dns';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){
        
    }
    @ApiOkResponse({description: 'list of quuiz'})
    @Get('/')
    async getAllQuiz(
      @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
      @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<Quiz>> {
      const options: IPaginationOptions = {
        limit,
        page,
      };
      return await this.quizService.paginate(options);
    }

  
    @Get('/:id')
    async getQuizById(@Param('id',ParseIntPipe) id:number){

      return await this.quizService.getQuizById(id);
    }

     @Post('create')
     @HttpCode(200)
     @UsePipes(ValidationPipe)
     async createQuiz(@Body() quizData : CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
     }
}
