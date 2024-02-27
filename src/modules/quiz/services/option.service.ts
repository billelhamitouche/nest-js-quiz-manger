import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {Option} from "../entities/option.entity"; 
import { CreateOptionDto } from "../dto/CreateOption.Dto";

 @Injectable() 
export class OptionService{
    constructor(
        @InjectRepository(Option)
    private optionRepository : Repository<Option>)
    {}

    createOption(creataOptionDto :CreateOptionDto){
        return [1,2,3];
    }
}