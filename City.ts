import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Airport } from './Airport';
import { Country } from './Country';

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Country, country => country.cities)
    country!: Country;

    @OneToMany(() => Airport, airport => airport.city)
    airports!: Airport[];
}
