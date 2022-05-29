import { IRepositoryCities, ICreateCityDTO } from "../../repositories/IRepository.cities";

export class CreateCityService {
  constructor(private citiesRepository: IRepositoryCities) { }

  async execute(data: ICreateCityDTO): Promise<void> {
    const cityALreadyExits = await this.citiesRepository.findByNameCity(data.name)

    if (cityALreadyExits) {
      throw new Error("A cidade já foi cadastrada!")
    }

    this.citiesRepository.create(data)
  }
}
