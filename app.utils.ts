import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULES = /^(?=.*[A-Z])(?=.*[a-z])(?=.?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/;

const PASSWORD_MESSAGE = 'password should have  1 upper case , lowercase letter along  with a number and special character';

const VALIDATION_PIPES = new ValidationPipe({
    errorHttpStatusCode : HttpStatus.UNPROCESSABLE_ENTITY
})

export const  REGEX = {
    PASSWORD_RULES,
}

export const MESSAGES ={
    PASSWORD_MESSAGE,
}


export const SETTINGS ={
    VALIDATION_PIPES,
}