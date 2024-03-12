import { IsNotEmpty, Length } from "class-validator";
import { ManyToOne } from "typeorm";
import { Question } from "../entities/question.entity";

export class CreateOptionDto {

    @IsNotEmpty()
    
    @Length(3,255)
    
    text: string;

    @IsNotEmpty()
    questionId: number;

    @IsNotEmpty()
    IsCorrect : boolean;

}

