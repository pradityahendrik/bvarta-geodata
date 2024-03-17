import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { FileController } from './controllers/file.controller';
import { AppService } from './services/app.service';
import { FileService } from './services/file.service';
import config from '../database/config';

@Module({
  imports: [   
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
