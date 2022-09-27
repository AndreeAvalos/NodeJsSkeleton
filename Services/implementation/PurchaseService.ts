import { IService } from "../interface/IService";
import { PurchaseRepository } from "../../Repositories/implementation/PurchaseRepository";
let repository = new PurchaseRepository();

export class PurchaseService implements IService<PurchaseEntity> {
  async GetAll(): Promise<PurchaseEntity[]> {
    return await repository.GetAll();
  }

  async Insert(entity: PurchaseEntity): Promise<PurchaseEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<PurchaseEntity | null> {
    return await repository.Get(id);
  }
}
