import { Router } from "express";
import { TouristSpotsImages } from "./touristSpotsImages.entity";

export const touristSpotImageRoutes = Router()

touristSpotImageRoutes.post('/create', async (req, res) => {
  const newTouristSpotImage: TouristSpotsImages = new TouristSpotsImages(req.body)
  return res.send(await newTouristSpotImage.save())
})
