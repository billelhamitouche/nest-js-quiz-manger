import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){
        
    }
    @Get('/')
    getAllQuiz(){
    return this.quizService.getQuiz();
    }

     @Post('create')
     @HttpCode(200)
     @UsePipes(ValidationPipe)
     async createQuiz(@Body() quizData : CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
     }
}
