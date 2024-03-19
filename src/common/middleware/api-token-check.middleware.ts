import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ApiTokenCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(req.header['apitoken'] != 'My-token'){
             throw new BadRequestException('the token doesnt match');
        }
        console.log(req.headers);
        next();
    }        
    
}