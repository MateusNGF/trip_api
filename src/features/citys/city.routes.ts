import { Router } from 'express'

import createCitiesController from './useCases/createCity'

export const cityRoute = Router()

cityRoute.post("/create", async (req, res) => {
  return createCitiesController().handle(req, res)
})
