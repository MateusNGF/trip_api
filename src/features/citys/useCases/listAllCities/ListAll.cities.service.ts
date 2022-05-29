import { City } from "../../city.entity";
import { IRepositoryCities } from "../../repositories/IRepository.cities";


export class ListAllCityService {
  constructor(private repositoryCities: IRepositoryCities) { }

  async execute(): Promise<City[]> {
    return this.repositoryCities.listAll()
  }
}
