import { Controller, Post, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { FileService } from '../services/file.service';
import { AuthGuard } from '../guard/auth.guard';

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/file/upload')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  fileUpload(@UploadedFile() file) {
    try {
        if (!file) {
            throw new Error('No file uploaded');
        }
        return this.fileService.fileUpload(file);
    } catch (error) {
        throw new Error(error)
    }
  }
}
