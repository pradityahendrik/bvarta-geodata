import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { FileController } from './controllers/file.controller';
import { AppService } from './services/app.service';
import { FileService } from './services/file.service';

@Module({
  imports: [],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
