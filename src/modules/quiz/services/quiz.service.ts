import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "../entities/quiz.entity";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Repository } from "typeorm";
import { Question } from "../entities/question.entity";
import { IPaginationOptions, Pagination,paginate } from "nestjs-typeorm-paginate";

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
    
  
    async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
        const qb = this.quizRepository.createQueryBuilder('q');
        qb.orderBy('q.id','DESC');

        return  paginate<Quiz>(qb, options);
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
