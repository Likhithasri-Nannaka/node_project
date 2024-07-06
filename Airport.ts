import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './City';

@Entity()
export class Airport {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    icao_code!: string;

    @Column()
    iata_code!: string;

    @Column()
    name!: string;

    @Column()
    type!: string;

    @Column()
    country_id!: number;

    @Column()
    continent_id!: number;

    @Column()
    website_url!: string;

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @Column()
    latitude_deg!: number;

    @Column()
    longitude_deg!: number;

    @Column()
    elevation_ft!: number;

    @ManyToOne(() => City, city => city.airports, { cascade: true })
    city!: City; // Establishes a many-to-one relationship with City entity
}
