import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { promises } from 'dns';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiOkPaginatedResponse } from 'nestjs-paginate';
import { AdminRoleGuard } from 'src/modules/auth/admin-role.guard';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { Request } from 'express';
import { RoleGuard } from 'src/modules/auth/role.guard';
import { Roles } from 'src/modules/auth/role.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { log } from 'console';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){
        
    }
    
    @ApiOkResponse({description: 'list of quuiz'})
    @UsePipes(ValidationPipe)
    @UseGuards(JwtAuthGuard,AdminRoleGuard)
    @Get('/')
     async getAllQuiz(
       @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
       @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
      @Req() req: Request
     ): Promise<Pagination<Quiz>> {      
       const options: IPaginationOptions = {
         limit,
         page,
       };
       return await this.quizService.paginate(options);
     }
  
    
    @ApiOkResponse({description:'Get a quiz by id'})
    @Get('/:id')
    async getQuizById(@Param('id',ParseIntPipe) id:number){

      return await this.quizService.getQuizById(id);
    }


    @ApiCreatedResponse( {description:'the quiz that got created ', type:Quiz})
     @Post('create')
     @HttpCode(200)
     @UsePipes(ValidationPipe)

     @UseGuards(JwtAuthGuard,RoleGuard)
     @Roles('admin', 'member')
     async createQuiz(@Body() quizData : CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
     }


     @Post('file')
     @UseInterceptors(FileInterceptor('file',{

      storage: diskStorage({
        
        destination: './files',

        filename: (req, file, callback) =>{ 
        
            const uniqueSuffix =  Date.now() + '-'+ Math.round(Math.random()* 1e9);
            const ext = extname(file.originalname);
            const filename = `${uniqueSuffix}${ext}`
            callback(null,filename);
        }
      })

     }))
     UploadFile(@UploadedFile() file: Express.Multer.File){
      console.log('file',file);
      
      return 'file uploaded';

     }
}
