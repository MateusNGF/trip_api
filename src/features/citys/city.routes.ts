import {Router} from 'express'
import { City } from './city.entity'

export const cityRoute = Router()

cityRoute.post("/create", async (req, res) => {
    const newCity = new City(req.body)

    return res.send(await newCity.save())
})