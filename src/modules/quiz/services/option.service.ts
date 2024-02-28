import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {Option} from "../entities/option.entity"; 
import { CreateOptionDto } from "../dto/CreateOption.Dto";
import { Question } from "../entities/question.entity";

 @Injectable() 
export class OptionService{
    constructor(
        @InjectRepository(Option)
    private optionRepository : Repository<Option>)
    {}

     async createOption(creataOptionDto :CreateOptionDto, question: Question) :Promise<Option>{
         
         const newOption =  this.optionRepository.create(
             {
                 text: creataOptionDto.text,
                 isCorrect: creataOptionDto.IsCorrect,
                 question: question,
             });

             return await this.optionRepository.save(newOption);


    }
}