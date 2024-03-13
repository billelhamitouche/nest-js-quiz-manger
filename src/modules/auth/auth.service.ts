import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){

    }
    async validateUserCreds(email: string,password: string): Promise<any>{
            
    }
}
