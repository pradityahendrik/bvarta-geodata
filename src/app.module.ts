import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { FileController } from './controllers/file.controller';
import { AuthController } from './controllers/auth.controller';
import { AppService } from './services/app.service';
import { FileService } from './services/file.service';
import { AuthService } from './services/auth.service';
import { GeoJSON } from './entities/geojson.entity'
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'bvarta',
      entities: [GeoJSON],
      logging: true,
      synchronize: false,
      migrationsTableName: 'typeorm_migrations',
      migrationsRun: false,
    }),
    TypeOrmModule.forFeature([GeoJSON]),
  ],
  controllers: [AppController, FileController, AuthController],
  providers: [AppService, FileService, AuthService, JwtService],
})
export class AppModule {}
