import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";
import { Department } from "./department.entity";

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column({ nullable: true })
  street_address: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  state_province: string;

  @ManyToOne(() => Country, (country) => country.locations)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => Department, (department) => department.location)
  departments: Department[];
}
