import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Purchase(create_time,name,id_vehicle,id_concessionaire,id_agent,id_client,price) VALUES (NOW(), ?, ?, ?, ?, ?, ?);`;
let getQuery = `SELECT id,id_vehicle as vehicle,id_concessionaire as concessionaire,id_agent as agent,id_client as client,price FROM Purchase WHERE id=?;`;
let allQuery = `SELECT id,id_vehicle as vehicle,id_concessionaire as concessionaire,id_agent as agent,id_client as client,price FROM Purchase;`;

export class PurchaseRepository implements IRepository<PurchaseEntity> {
  async GetAll(): Promise<PurchaseEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(entity: PurchaseEntity): Promise<PurchaseEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [
          entity.name,
          entity.vehicle,
          entity.concessionaire,
          entity.agent,
          entity.client,
          entity.price,
        ],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<PurchaseEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
