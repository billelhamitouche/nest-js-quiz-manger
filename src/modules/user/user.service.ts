import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserRegisterDto } from "./dto/userRegister.dto";
import * as bcrypt from 'bcrypt';

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

    async getUserbyEmail(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({where : { email }});
    }

    async getUserbyId(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({where : { id }});
    }

}