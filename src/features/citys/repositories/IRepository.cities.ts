export interface ICreateCityDTO {
  name: string;
  zipCode: string;
  state: string;
  country: string;
}

export interface IRepositoryCities {
  create(data: ICreateCityDTO): Promise<void>
}
