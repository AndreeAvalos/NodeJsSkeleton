import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Agent(create_time,name,id_concessionaire) VALUES (NOW(), ?, ?);`;
let getQuery = `SELECT id, name, id_concessionaire as concessionaire FROM Agent WHERE id= ?;`;
let allQuery = `SELECT id, name, id_concessionaire as concessionaire FROM Agent;`;

export class AgentRepository implements IRepository<AgentEntity> {
  async GetAll(): Promise<AgentEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(entity: AgentEntity): Promise<AgentEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [entity.name, entity.concessionaire],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<AgentEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
