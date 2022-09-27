import { IService } from "../interface/IService";
import { VehicleRepository } from "../../Repositories/implementation/VehicleRepository";
let repository = new VehicleRepository();

export class VehicleService implements IService<VehicleEntity> {
  async GetAll(): Promise<VehicleEntity[]> {
    return await repository.GetAll();
  }

  async Insert(entity: VehicleEntity): Promise<VehicleEntity | null> {
    return await repository.Insert(entity);
  }

  async Get(id: number): Promise<VehicleEntity | null> {
    return await repository.Get(id);
  }
}
