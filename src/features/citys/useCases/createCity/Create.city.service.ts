import { IRepositoryCities, ICreateCityDTO } from "../../repositories/IRepository.cities";

export class CreateCityService {
  constructor(private citiesRepository: IRepositoryCities) { }

  async execute(data: ICreateCityDTO): Promise<void> {
    this.citiesRepository.create(data)
  }
}
