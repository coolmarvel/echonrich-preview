import { Country } from 'src/country/entity/country.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  region_id: number;

  @Column()
  region_name: string;

  @OneToMany(() => Country, (country) => country.region)
  countries: Country[];
}
