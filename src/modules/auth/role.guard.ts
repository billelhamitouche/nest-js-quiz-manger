import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "../user/user.service";


@Injectable()
export class  RoleGuard implements CanActivate {
    
    constructor(private reflector: Reflector, private userService: UserService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const roles = this.reflector.get<string[]>('roles',context.getHandler());

        const request = context.switchToHttp().getRequest(); 
               
        if (request.user) {

            const { id } = request.user;
            const user = await this.userService.getUserbyId(id);
            console.log(user); // Log the user object
            console.log('role',user.role);
            return roles.includes(user.role);
            
        }
       //  console.log(request);
       
       return false; 
       
        }

}