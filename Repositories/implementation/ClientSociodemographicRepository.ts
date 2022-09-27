import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Client_Sociodemographic(create_time,id_client,id_sociodemographic) VALUES (NOW(), ?, ?);`;
let getQuery = `SELECT id,id_client as client,id_sociodemographic as sociodemographic FROM Client_Sociodemographic WHERE id=?;`;
let allQuery = `SELECT id,id_client as client,id_sociodemographic as sociodemographic FROM Client_Sociodemographic;`;

export class ClientSociodemographicRepository
  implements IRepository<ClientSociodemographicEntity>
{
  async GetAll(): Promise<ClientSociodemographicEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(
    entity: ClientSociodemographicEntity
  ): Promise<ClientSociodemographicEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [entity.client, entity.sociodemographic],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<ClientSociodemographicEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
