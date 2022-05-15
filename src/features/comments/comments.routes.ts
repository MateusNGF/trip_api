import { Router } from "express"
import { getCustomRepository } from "typeorm"
import { Comments } from "./comments.entity"
import { CommentsRepository } from "./comments.repository"

export const commentsRoutes = Router()

commentsRoutes.post("/create", async (req, res) => {
  try {
    const newComment: Comments = new Comments(req.body)

    const repositoryComments = getCustomRepository(CommentsRepository)

    const findDuplicatedComment = await repositoryComments.findCommentDuplicated(
      newComment.comment,
      newComment.touristSpot,
      newComment.user
    )

    if (findDuplicatedComment.length > 0) {
      throw new Error("Comment duplicated!")
    }

    return res.send(await newComment.save())
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
})
