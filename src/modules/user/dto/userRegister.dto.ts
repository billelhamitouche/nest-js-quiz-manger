import { ApiProperty } from "@nestjs/swagger";
import { REGEX ,MESSAGES} from "app.utils";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";


export class UserRegisterDto{

    @ApiProperty({
       description:'the name of the user',
       example:'jhon done',
    })
    @IsNotEmpty()
    name: string;

    
    @ApiProperty({
      description:'The email adress of the user',
      example:'jhon.done@gmail.com',
   })
    @IsEmail()
    email:string;

    
    @ApiProperty({
      description:'The password of the  User',
      example:'1234Abcd!',
   })
    @IsNotEmpty()
    @Length(8,24)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/, {
        message: 'password should have  1 upper case , lowercase letter along  with a number and special character',
      })
    
    password:string;


    
    @ApiProperty({
      description:'confirm the password ',
      example:'1234Abcd!',
   })
    @IsNotEmpty()
    @Length(8,24)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/, {
        message: 'password should have  1 upper case , lowercase letter along  with a number and special character',
      })

    confirm: string;

}