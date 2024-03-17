import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should call login method of AuthService with username and password', () => {
      const formData = { username: 'testuser', password: 'password123' };
      const loginSpy = jest.spyOn(authService, 'login');

      controller.login(formData);

      expect(loginSpy).toHaveBeenCalledWith(formData.username, formData.password);
    });

    it('should throw an error if login method of AuthService throws an error', () => {
      const formData = { username: 'testuser', password: 'password123' };
      const errorMessage = 'Login failed';

      (authService.login as jest.Mock).mockImplementation(() => {
        throw new Error(errorMessage);
      });

      expect(() => controller.login(formData)).toThrowError(errorMessage);
    });
  });
});
