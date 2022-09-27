import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Concessionaire(create_time,name,address) VALUES (NOW(), ?, ?);`;
let getQuery = `SELECT id,name,address FROM Concessionaire WHERE id=?;`;
let allQuery = `SELECT id,name,address FROM Concessionaire;`;

export class ConcessionaireRepository
  implements IRepository<ConcessionaireEntity>
{
  async GetAll(): Promise<ConcessionaireEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(
    entity: ConcessionaireEntity
  ): Promise<ConcessionaireEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [entity.name, entity.address],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<ConcessionaireEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
