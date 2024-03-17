import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  login(@Body() formData: any) {
    try {
        return this.authService.login(formData.username, formData.password);
    } catch (error) {
        throw new Error(error)
    }
  }
}
