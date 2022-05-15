import { Router } from "express";
import { Rentals } from "./rentals.entity";

export const rentalsRoutes = Router()

rentalsRoutes.post('/create', async (req, res) => {
  const newRentals: Rentals = new Rentals(req.body)
  return res.send(await newRentals.save())
})
