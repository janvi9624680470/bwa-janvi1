import { Controller, Request, Post, UseGuards, UnauthorizedException } from '@nestjs/common';
// import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  async login(@Request() req) {

    const user = await this.authService.validateUser(req.body.userName, req.body.password);
    console.log(user ,'user in login post methdo ')
    if (!user) {
        return { statusCode: 401, message: 'Invalid credentials' , };
      }
     return this.authService.login(user);
  }
 
}
 // @Post('login')
  // async login(@Request() req) {
  //   try {
  //     const user = await this.authService.validateUser(req.body.userName, req.body.password);
  //     console.log(user, 'user in login post method');
  //     return this.authService.login(user);
  //   } catch (error) {
  //     if (error instanceof UnauthorizedException) {
  //       return { statusCode: 401, message: error.message };
  //     }
  //     throw error;
  //   }
  // }