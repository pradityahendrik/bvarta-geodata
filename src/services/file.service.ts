import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileService {
  fileUpload(file) {
    const isGeoJSON = this.isGeoJSON(file);
    if (!isGeoJSON) {
        throw new Error('Invalid GeoJSON format');
    }

    return file;
  }

  isGeoJSON(file): boolean {
    const content = fs.readFileSync(file.path, 'utf8');
    const data = JSON.parse(content);
    
    if (data.type === 'FeatureCollection' && Array.isArray(data.features)) {
        return true;
    } else {
        return false;
    }
  }
}
