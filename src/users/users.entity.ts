import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name : "fist_name", nullable : false})
    firstName: string

    @Column({ name : "last_name",nullable : false})
    lastName: string

    @Column({ name : "access_level" , default : false})
    isAdm: boolean
}