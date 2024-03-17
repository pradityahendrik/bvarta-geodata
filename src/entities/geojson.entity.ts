import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'geojson' })
export class GeoJSON {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  content: Record<string, any>; 

  @Column()
  created_at: Date;
  
  @Column()
  updated_at: Date;

  @Column()
  deleted_at: Date;
}