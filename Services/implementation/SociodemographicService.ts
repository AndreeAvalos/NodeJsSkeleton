import { IService } from "../interface/IService";
import { SociodemographicRepository } from "../../Repositories/implementation/SociodemographicRepository";
let repository = new SociodemographicRepository();

export class SociodemographicService
  implements IService<SociodemographicEntity>
{
  async GetAll(): Promise<SociodemographicEntity[]> {
    return await repository.GetAll();
  }

  async Insert(
    entity: SociodemographicEntity
  ): Promise<SociodemographicEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<SociodemographicEntity | null> {
    return await repository.Get(id);
  }
}
