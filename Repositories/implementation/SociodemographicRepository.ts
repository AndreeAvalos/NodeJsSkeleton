import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Sociodemographic(create_time,name) VALUES (NOW(), ?);`;
let getQuery = `SELECT id,name FROM Sociodemographic WHERE id=?;`;
let allQuery = `SELECT id,name FROM Sociodemographic;`;

export class SociodemographicRepository
  implements IRepository<SociodemographicEntity>
{
  async GetAll(): Promise<SociodemographicEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(
    entity: SociodemographicEntity
  ): Promise<SociodemographicEntity | null> {
    return new Promise((resolve) => {
      connection.query(postQuery, [entity.name], (err, rows) => {
        if (err) throw err;
        console.log("Row inserted with id = " + rows.insertId);
        return resolve(entity);
      });
    });
  }

  async Get(id: number): Promise<SociodemographicEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
