import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { SETTINGS } from "app.utils";
import { User } from "./user.entity";

@Controller('user')
export class UserController {
constructor(private userService :UserService){}

@Post('/register')
async UserRegistration(
    @Body(SETTINGS.VALIDATION_PIPES) 
    userRegisterDto: UserRegisterDto
    ):Promise<User>{
        return this.userService.UserRegistration(userRegisterDto);
        }
}