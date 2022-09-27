import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Client(create_time,name,identification_document,address,phone) VALUES (NOW(), ?, ?, ?, ?);`;
let getQuery = `SELECT id,name,identification_document as identificationDocument,address,phone FROM Client WHERE id=?;`;
let allQuery = `SELECT id,name,identification_document as identificationDocument,address,phone FROM Client;`;

export class ClientRepository implements IRepository<ClientEntity> {
  async GetAll(): Promise<ClientEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(entity: ClientEntity): Promise<ClientEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [
          entity.name,
          entity.identificationDocument,
          entity.address,
          entity.phone,
        ],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<ClientEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
