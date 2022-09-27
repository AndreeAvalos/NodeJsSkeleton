import { IService } from "../interface/IService";
import { ConcessionaireRepository } from "../../Repositories/implementation/ConcessionaireRepository";
let repository = new ConcessionaireRepository();

export class ConcessionaireService implements IService<ConcessionaireEntity> {
  async GetAll(): Promise<ConcessionaireEntity[]> {
    return await repository.GetAll();
  }

  async Insert(
    entity: ConcessionaireEntity
  ): Promise<ConcessionaireEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<ConcessionaireEntity | null> {
    return await repository.Get(id);
  }
}
