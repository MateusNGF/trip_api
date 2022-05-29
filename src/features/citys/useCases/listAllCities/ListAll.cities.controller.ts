import { Request, Response } from "express";
import { ListAllCityService } from "./ListAll.cities.service";


export class ListAllCityController {
  constructor(private listAllCitiesService: ListAllCityService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    return res.send(await this.listAllCitiesService.execute())
  }
}
