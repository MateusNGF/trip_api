import { Router } from "express";
import { CommentImage } from "./commentsImage.entity";


export const commentsImageRoutes = Router()

commentsImageRoutes.post('/create', async (req, res) => {
  const newCommentsImage: CommentImage = new CommentImage(req.body)
  return res.send(await newCommentsImage.save())
})
