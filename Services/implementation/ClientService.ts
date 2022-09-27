import { IService } from "../interface/IService";
import { ClientRepository } from "../../Repositories/implementation/ClientRepository";
let repository = new ClientRepository();

export class ClientService implements IService<ClientEntity> {
  async GetAll(): Promise<ClientEntity[]> {
    return await repository.GetAll();
  }

  async Insert(entity: ClientEntity): Promise<ClientEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<ClientEntity | null> {
    return await repository.Get(id);
  }
}
