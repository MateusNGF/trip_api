import { getRepository, Repository } from "typeorm";
import { City } from "../../city.entity";
import { IRepositoryCities, ICreateCityDTO } from "../IRepository.cities";

export class RepositoryCities implements IRepositoryCities {
  private repository: Repository<City>

  constructor() {
    this.repository = getRepository(City)
  }

  findByNameCity(name: string): Promise<City> {
    return this.repository.findOne({ name })
  }

  listAll(): Promise<City[]> {
    return this.repository.find()
  }

  async create(data: ICreateCityDTO): Promise<void> {
    const city = this.repository.create(data)

    await this.repository.save(city)
  }
}
