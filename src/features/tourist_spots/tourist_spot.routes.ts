

import {Router} from 'express'
import { getCustomRepository } from 'typeorm'
import { SpotsRepository } from './spots.repository'
import { TouristSpots } from './tourist_spots.entity'

export const touristSpotsRoutes = Router()

touristSpotsRoutes.post("/create", async (req, res) => {
    const newSpot : TouristSpots = new TouristSpots(req.body)
    return  res.send(await newSpot.save())
})

touristSpotsRoutes.get("/find", async (req, res) => {
    const repository = getCustomRepository(SpotsRepository); 
    return res.send(await repository.getSpots())
})