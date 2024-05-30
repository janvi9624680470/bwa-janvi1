import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
 
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {

    const user = await this.usersService.findOneByUserName(userName);
 
    if (!user) {
      throw new UnauthorizedException('Username is not valid');
    }

    if(user.password !== pass){
      throw new UnauthorizedException('Password is not valid');
    }

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userName: user._doc?.userName, sub: user._doc?._id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}