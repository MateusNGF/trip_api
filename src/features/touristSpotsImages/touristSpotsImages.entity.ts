import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { TouristSpots } from "../tourist_spots";
import { User } from "../users";

@Entity("tourist_spots_images")
export class TouristSpotsImages extends BaseEntity {
    constructor(tourist_spots_image) {
        super()
        Object.assign(this, tourist_spots_image)
    }

    @PrimaryGeneratedColumn()
    id?: number

    @ManyToOne(type => TouristSpots, touristspot => touristspot.id)
    @JoinColumn({ name: "tourist_spot_id" })
    touristSpot: string

    @ManyToOne(type => User, user => user.id)
    @JoinColumn({ name: "user_id" })
    user: string

    @Column({ name: "url_image" })
    urlImage: string

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date
}