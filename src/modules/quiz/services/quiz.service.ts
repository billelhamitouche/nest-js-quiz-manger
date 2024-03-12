import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "../entities/quiz.entity";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Repository } from "typeorm";
import { Question } from "../entities/question.entity";

@Injectable()
export class QuizService{
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){

    }
    async getAllQuiz(): Promise<Quiz[]> {
        return this.quizRepository
          .createQueryBuilder('q')
          .leftJoinAndSelect('q.questions', 'qt')
          .getMany();
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
