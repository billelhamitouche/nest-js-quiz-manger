import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { SETTINGS } from "app.utils";
import { User } from "./user.entity";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UserController {
constructor(private userService :UserService){}

@Post('/register')
@ApiCreatedResponse({
    description:' created',
    type:User,
})

@ApiBadRequestResponse({
    description:'user cannot register. Try again',
})
async UserRegistration(
    @Body(SETTINGS.VALIDATION_PIPES) 
    userRegisterDto: UserRegisterDto
    ){
        return await this.userService.UserRegistration(userRegisterDto);
        }
}