import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';
import { UserService } from "../user/user.service";
import { UserRoles } from "../user/enums/user.enum";

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor(private userService: UserService) {}

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest(); 
               
         if (request.user) {

             const { id } = request.user;
             const user = await this.userService.getUserbyId(id);
             console.log(user); // Log the user object
             return user.role === UserRoles.MEMBER;
         }
        //  console.log(request);
         return false; 
    }
}