import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';
import { UserService } from "../user/user.service";

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor(private userService: UserService) {}

     canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest(); 
        console.log(request);
        
         if (request.user || true) {

             const { id } = request.user;
             const user =  this.userService.getUserbyId(id);
             console.log(request.user); // Log the user object
             return true;
         }
        //  console.log(request);
         return false; 
    }
}