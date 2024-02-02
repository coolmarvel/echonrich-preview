import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.entity';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  region_id: number;

  @Column()
  region_name: string;

  @OneToMany(() => Country, (country) => country.region)
  countries: Country[];
}
