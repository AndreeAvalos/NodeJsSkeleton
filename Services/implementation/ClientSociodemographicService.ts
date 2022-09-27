import { IService } from "../interface/IService";
import { ClientSociodemographicRepository } from "../../Repositories/implementation/ClientSociodemographicRepository";
let repository = new ClientSociodemographicRepository();

export class ClientSociodemographicService
  implements IService<ClientSociodemographicEntity>
{
  async GetAll(): Promise<ClientSociodemographicEntity[]> {
    return await repository.GetAll();
  }

  async Insert(
    entity: ClientSociodemographicEntity
  ): Promise<ClientSociodemographicEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<ClientSociodemographicEntity | null> {
    return await repository.Get(id);
  }
}
