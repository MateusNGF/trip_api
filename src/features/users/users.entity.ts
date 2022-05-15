import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm"

@Entity("users")
export class User extends BaseEntity {

  constructor(user){
    super()
    Object.assign(this, user)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: "name", nullable: false })
  name: string

  @Column({ name: "username", nullable: false })
  username: string

  @Column({ name: " email", nullable : false })
  email : string

  @Column({ name: "password", nullable : false })
  password: string

  @Column({ name: "is_adm", default : false })
  isAdm ?: boolean

  @CreateDateColumn({name: "create_at"})
  createAt ?: Date

  @UpdateDateColumn({name: "update_at"})
  updateAt ?: Date
}