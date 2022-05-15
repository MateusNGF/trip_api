import { on } from "events";
import { EntityRepository, getCustomRepository, getRepository, IsNull, Repository } from "typeorm";
import { Comments } from "./comments.entity";

@EntityRepository(Comments)
export class CommentsRepository extends Repository<Comments> {

  async createComment(comment: Comments) {
    const test = await comment.save()
    return test
  }

  async findCommentDuplicated(comment: string, touristSpot: string, user: string): Promise<Comments[]> {
    const commentDuplicated = this.createQueryBuilder('c')
      .where('comment = :comment', { comment })

    if (touristSpot) {
      commentDuplicated.andWhere('c.touristSpot = :touristSpot', { touristSpot })
    }

    if (user) {
      commentDuplicated.andWhere('c.user = :user', { user })
    }

    const res = await commentDuplicated.getMany()

    console.log(res)

    return res;
  }
}
