import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  fileUpload(file) {
    const content = file.buffer.toString();
    const isGeoJSON = this.isGeoJSON(content);
    if (!isGeoJSON) {
        throw new Error('Invalid GeoJSON format');
    }

    return JSON.parse(content);
  }

  isGeoJSON(content: string): boolean {
    const data = JSON.parse(content);
    return (data.type === 'FeatureCollection' && Array.isArray(data.features)) ? true : false;
  }
}
