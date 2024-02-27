import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../entities/question.entity";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService{
    constructor(@InjectRepository(Question)
    private questionRepository: Repository<Question> 
    ){}

    async createQuestion(questionDTO : CreateQuestionDto,quiz: Quiz): Promise<Question>{
  
        const newQuestion =  this.questionRepository.create({
            question: questionDTO.question,
            quiz: quiz,
        });

        //quiz.questions = [newQuestion, ...quiz.questions];

        //await quiz.save();

        return this.questionRepository.save(newQuestion);
    }
}