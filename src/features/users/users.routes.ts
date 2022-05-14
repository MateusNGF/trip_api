import {Router} from 'express'
import { User } from './users.entity'


export const userRoutes = Router()

userRoutes.post("/create", async (req, res) => {
    const newUser : User = new User(req.body)
    console.log(newUser)
    res.send(await newUser.save())
})