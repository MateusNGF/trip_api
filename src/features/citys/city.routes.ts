import { Router } from 'express'

import createCitiesController from './useCases/createCity'
import listAllCitiesController from './useCases/listAllCities'

export const cityRoute = Router()

cityRoute.post("/create", async (req, res) => {
  return createCitiesController().handle(req, res)
})

cityRoute.get('/listAll', async (req, res) => {
  return listAllCitiesController().handle(req, res)
})
