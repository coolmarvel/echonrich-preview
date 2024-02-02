import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Region } from './region.entity';
import { Location } from './location.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  country_id: string;

  @Column()
  country_name: string;

  @ManyToOne(() => Region, (region) => region.countries)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @OneToMany(() => Location, (location) => location.country)
  locations: Location[];
}
