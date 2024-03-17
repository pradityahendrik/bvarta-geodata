import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  login(username: string, password: string): any {
    const payload = { username, password };
    return {
      access_token: this.jwtService.sign(payload, { secret: 'bvarta', privateKey: 'bvarta' }),
    };
  }
}
