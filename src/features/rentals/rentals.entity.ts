import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TouristSpots } from "../tourist_spots";
import { User } from "../users";

@Entity("rentals")
export class Rentals extends BaseEntity {
    constructor(rental) {
        super()
        Object.assign(this, rental)
    }

    @PrimaryGeneratedColumn()
    id?: number

    @ManyToOne(type => User, user => user.id)
    @JoinColumn({ name: "user_id" })
    user: string

    @ManyToOne(type => TouristSpots, touristspot => touristspot.id)
    @JoinColumn({ name: "tourist_spot_id" })
    touristSpot: string

    @Column({ name: "start_date" })
    startDate: Date

    @Column({ name: "end_date" })
    endDate: Date

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date
}