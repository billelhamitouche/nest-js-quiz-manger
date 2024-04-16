import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Questions')
@Controller('question')
export class QuestionController{

    constructor(private QuestionService : QuestionService , private QuizSerivce : QuizService){}

@Post('')

@UsePipes(ValidationPipe)
    
    async  saveQuestion(@Body() question : CreateQuestionDto){

        const quiz = await this.QuizSerivce.getQuizById(question.quizId);

    return this.QuestionService.createQuestion(question, quiz); 

}

}