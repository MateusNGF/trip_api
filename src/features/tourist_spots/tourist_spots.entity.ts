import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "../citys/city.entity"

@Entity("TouristSpots")
export class TouristSpots extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => City, citys => citys.id)
  city: City

  @Column()
  address: string

  @Column()
  number: string

  @Column()
  zipCode: string

  @Column()
  district: string

  @Column()
  street: string

  @Column()
  story: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
