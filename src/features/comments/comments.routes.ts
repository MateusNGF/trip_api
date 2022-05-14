import { Router } from "express"
import { Comments } from "./comments.entity"

export const commentsRoutes = Router()

commentsRoutes.post("/create", async (req, res) => {
  const newComment: Comments = new Comments(req.body)
  return res.send(await newComment.save())
})
