import { Location } from 'src/location/entity/location.entity';
import { Region } from 'src/region/entity/region.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
