import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return false;
    }
    
    try {
        const decodedToken = this.jwtService.verify(token, { secret: 'bvarta' });

        request.user = decodedToken;
        return true;
    } catch (error) {
      return false;
    }
  }
}