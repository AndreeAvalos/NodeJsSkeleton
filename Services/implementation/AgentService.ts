import { IService } from "../interface/IService";
import { AgentRepository } from "../../Repositories/implementation/AgentRepository";
let repository = new AgentRepository();

export class AgentService implements IService<AgentEntity> {
  async GetAll(): Promise<AgentEntity[]> {
    return await repository.GetAll();
  }

  async Insert(entity: AgentEntity): Promise<AgentEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<AgentEntity | null> {
    return await repository.Get(id);
  }
}
