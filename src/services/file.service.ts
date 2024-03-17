import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeoJSON } from '../entities/geojson.entity'

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(GeoJSON)
    private readonly fileRepository: Repository<GeoJSON>,
  ) {}

  fileUpload(file) {
    const content = file.buffer.toString();
    const isGeoJSON = this.isGeoJSON(content);
    if (!isGeoJSON) {
        throw new Error('Invalid GeoJSON format');
    }

    const geojson = JSON.parse(content);
    return this.fileRepository.save(geojson);
  }

  isGeoJSON(content: string): boolean {
    const data = JSON.parse(content);
    return (data.type === 'FeatureCollection' && Array.isArray(data.features)) ? true : false;
  }
}
