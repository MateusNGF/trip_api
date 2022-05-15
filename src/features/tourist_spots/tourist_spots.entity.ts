import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { City } from "../citys/city.entity"
@Entity("tourist_spots")
export class TouristSpots extends BaseEntity {

  constructor(user){
    super()
    Object.assign(this, user)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(type => City, city => city.id)
  @JoinColumn({ name : "city_id"})
  city : string

  @Column()
  address: string

  @Column()
  number: number

  @Column()
  zipCode: string

  @Column()
  district: string

  @Column()
  street: string

  @Column()
  story: string

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date
}


