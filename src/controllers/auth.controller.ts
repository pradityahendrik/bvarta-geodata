import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  @ApiOperation({ summary: 'Upload a file' })
  @ApiParam({ description: 'password', type: 'string', name: 'password' })
  @ApiParam({ description: 'username', type: 'string', name: 'username' })
  @ApiResponse({ status: 200, description: 'success' })
  @ApiResponse({ status: 400, description: 'Error' })
  login(@Body() formData: any) {
    try {
        return this.authService.login(formData.username, formData.password);
    } catch (error) {
        throw new Error(error)
    }
  }
}
