import { HttpException, HttpStatus } from "@nestjs/common";


export class ApiTokenPaymentException extends HttpException{

    constructor(){
        super('token suggest payment is required',HttpStatus.PAYMENT_REQUIRED)
    }
}