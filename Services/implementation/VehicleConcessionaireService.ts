import { IService } from "../interface/IService";
import { VehicleConcessionaireRepository } from "../../Repositories/implementation/VehicleConcessionaireRepository";
let repository = new VehicleConcessionaireRepository();

export class VehicleConcessionaireService
  implements IService<VehicleConcessionaireEntity>
{
  async GetAll(): Promise<VehicleConcessionaireEntity[]> {
    return await repository.GetAll();
  }

  async Insert(
    entity: VehicleConcessionaireEntity
  ): Promise<VehicleConcessionaireEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<VehicleConcessionaireEntity | null> {
    return await repository.Get(id);
  }
}
