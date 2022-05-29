import { RepositoryCities } from "../../repositories/implementations/Repository.cities"
import { CreateCityController } from "./Create.city.controller"
import { CreateCityService } from "./Create.city.service"

export default (): CreateCityController => {
  const citiesRepository = new RepositoryCities()
  const createCitiesService = new CreateCityService(citiesRepository)
  const createCitiesController = new CreateCityController(createCitiesService)

  return createCitiesController
}
