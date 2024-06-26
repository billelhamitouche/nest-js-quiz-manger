import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){}

@UseGuards(LocalAuthGuard)
@Post('/login')
   login(@Request() req){
//      return req.user;
      return  this.authService.generateToken(req.user);
  }

@UseGuards(JwtAuthGuard)
@Get('/user')
  
  async user(@Request() req){
    
    return req.user;

}

}
