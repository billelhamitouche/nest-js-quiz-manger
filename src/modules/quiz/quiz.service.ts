import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "./quiz.entity";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Repository } from "typeorm";

@Injectable()
export class QuizService{
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){

    }
    getQuiz() {
        return [1,2,3];
    }

    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne(
            { where: { id }, relations: ['questions'] }
            );
           
    }

    async createNewQuiz (quiz: CreateQuizDto){

        return await this.quizRepository.save(quiz);
    }
}
