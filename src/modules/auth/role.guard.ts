import { CanActivate, ExecutionContext } from "@nestjs/common";


export class  RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}