import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Vehicle_Concessionaire(create_time,id_vehicle,id_concessionaire) VALUES (NOW(), ?, ?);`;
let getQuery = `SELECT id,id_vehicle as vehicle,id_concessionaire as concessionaire FROM Vehicle_Concessionaire WHERE id=?;`;
let allQuery = `SELECT id,id_vehicle as vehicle,id_concessionaire as concessionaire FROM Vehicle_Concessionaire;`;

export class VehicleConcessionaireRepository
  implements IRepository<VehicleConcessionaireEntity>
{
  async GetAll(): Promise<VehicleConcessionaireEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(
    entity: VehicleConcessionaireEntity
  ): Promise<VehicleConcessionaireEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [entity.vehicle, entity.concessionaire],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<VehicleConcessionaireEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
