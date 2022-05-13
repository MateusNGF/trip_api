import {Router} from 'express'


export const userRoutes = Router()


userRoutes.get("/oi", (req, res) => {
    res.send("oi")
})