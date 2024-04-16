import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/CreateOption.Dto";
import { Option } from "../entities/option.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Options')
@Controller('question/option')
export class OptionController {
 constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
 ){}
 
 @Post('')
 @UsePipes(ValidationPipe)
  async saveOptionToQuest(@Body() createoptionDto: CreateOptionDto){
     
   const question = await this.questionService.findQuestionById(createoptionDto.questionId);

   const option = await this.optionService.createOption(createoptionDto,question);

      return {question, option} ;

 }

}