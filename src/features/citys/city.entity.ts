import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm"

@Entity("cities")
export class City extends BaseEntity {

  constructor(city){
    super()
    Object.assign(this, city)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: "name", nullable: false })
  name?: string

  @Column({ name: "zip_code", nullable: false })
  zipCode?: string

  @Column({ name: "state", nullable : false })
  state?: string

  @Column({ name: "country", nullable : false })
  country?: string

  @CreateDateColumn({name: "created_at"})
  createdAt ?: Date

  @UpdateDateColumn({name: "updated_at"})
  updatedAt ?: Date
}
