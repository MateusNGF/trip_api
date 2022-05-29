import { RepositoryCities } from "../../repositories/implementations/Repository.cities";
import { ListAllCityController } from "./ListAll.cities.controller";
import { ListAllCityService } from "./ListAll.cities.service";


export default (): ListAllCityController => {
  const repositoryCities = new RepositoryCities()
  const listAllCitiesService = new ListAllCityService(repositoryCities)
  const listAllCitiesController = new ListAllCityController(listAllCitiesService)

  return listAllCitiesController
}
