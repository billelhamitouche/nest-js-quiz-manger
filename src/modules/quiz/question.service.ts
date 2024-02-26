import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./question.entity";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuestionService{
    constructor(@InjectRepository(Question)
    private questionRepository: Repository<Question> 
    ){}

    async createQuestion(question : CreateQuestionDto,quiz: Quiz): Promise<Question>{
  
        return await this.questionRepository.save({
            question: question.question
        });
    }
}