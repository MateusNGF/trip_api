import { Request, Response } from 'express'
import { CreateCityService } from './Create.city.service'

export class CreateCityController {
  constructor(private createCityService: CreateCityService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body

    await this.createCityService.execute(data)

    return res.status(201).send()
  }
}
