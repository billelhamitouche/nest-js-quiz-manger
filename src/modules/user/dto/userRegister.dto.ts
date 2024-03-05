import { REGEX ,MESSAGES} from "app.utils";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class UserRegisterDto{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty({ message: 'username is required' })
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @Length(8,24)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/, {
        message: 'password should have  1 upper case , lowercase letter along  with a number and special character',
      })
    
    password:string;

    @IsNotEmpty()
    @Length(8,24)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/, {
        message: 'password should have  1 upper case , lowercase letter along  with a number and special character',
      })

    confirm: string;

}