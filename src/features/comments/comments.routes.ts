import { Router } from "express"
import { getCustomRepository } from "typeorm"
import { Comments } from "./comments.entity"
import { CommentsRepository } from "./comments.repository"

const repository = getCustomRepository(CommentsRepository)
export const commentsRoutes = Router()

commentsRoutes.post("/create", async (req, res) => {
  const newComment: Comments = new Comments(req.body)
  return res.send(await newComment.save())
})
