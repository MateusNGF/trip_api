import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Comments } from "../comments/comments.entity"
import { User } from "../users"

@Entity("image_comments")
export class CommentImage extends BaseEntity {
  constructor(comment_image) {
    super()
    Object.assign(this, comment_image)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(type => Comments, comment => comment.id)
  @JoinColumn({ name: "comment_id" })
  comment: string

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
