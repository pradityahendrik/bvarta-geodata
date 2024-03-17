import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { FileService } from '../services/file.service';

describe('FileController', () => {
  let controller: FileController;
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [
        {
          provide: FileService,
          useValue: {
            fileUpload: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FileController>(FileController);
    fileService = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('fileUpload', () => {
    it('should call fileUpload method of FileService', () => {
      const file = {};

      controller.fileUpload(file);

      expect(fileService.fileUpload).toHaveBeenCalledWith(file);
    });

    it('should throw an error if no file is uploaded', () => {
      const file = null;

      expect(() => controller.fileUpload(file)).toThrowError('No file uploaded');
    });

    it('should throw an error if fileUpload method of FileService throws an error', () => {
      const file = {};
      const errorMessage = 'File upload failed';

      (fileService.fileUpload as jest.Mock).mockImplementation(() => {
        throw new Error(errorMessage);
      });

      expect(() => controller.fileUpload(file)).toThrowError(errorMessage);
    });
  });
});
