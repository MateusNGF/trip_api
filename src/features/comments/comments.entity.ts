import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TouristSpots } from "../tourist_spots";
import { User } from "../users";

@Entity("comments")
export class Comments extends BaseEntity {
  constructor(comment) {
    super()
    Object.assign(this, comment)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(type => TouristSpots, touristSpot => touristSpot.id)
  @JoinColumn({ name: "tourist_spots_id" })
  touristSpot: string

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: "user_id" })
  user: string

  @Column()
  comment: string

  @Column()
  evaluation: number

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date

  @UpdateDateColumn({ name: "update_at" })
  updatedAt?: Date
}
