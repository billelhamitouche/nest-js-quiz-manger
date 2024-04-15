import { BadRequestException, HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { log } from "console";
import { NextFunction, Request, Response } from "express";
import { ApiTokenPaymentException } from "../exceptions/api-token-payment.exception";

Injectable()
export class ApiTokenCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers['apitoken'] == 'My-token')
       
       {
        throw new ApiTokenPaymentException();
       
        } 
        // console.log(req.headers);
        
                    
        next();
        
    }        
    
}