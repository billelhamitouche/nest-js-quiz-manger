import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserRegisterDto } from "./dto/userRegister.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User> 
     ){}
   async UserRegistration(userRegister :UserRegisterDto):Promise<User>{
    const newUser = this.userRepository.create({
        name : userRegister.name,
        email :userRegister.email,
        password : userRegister.password,
    
    });
    return await this.userRepository.save(newUser);
}
}