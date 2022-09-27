import e from "express";
import connection from "../../Database/DatabaseContext";
import { IRepository } from "../interface/IRepository";

let postQuery = `INSERT INTO Vehicle(create_time,name,model,year,color,price) VALUES (NOW(), ?, ?, ?, ?, ?);`;
let getQuery = `SELECT id,name,model,year,color,price FROM Vehicle WHERE id=?;`;
let allQuery = `SELECT id,name,model,year,color,price FROM Vehicle;`;

export class VehicleRepository implements IRepository<VehicleEntity> {
  async GetAll(): Promise<VehicleEntity[]> {
    return new Promise((resolve) => {
      connection.query(allQuery, (err, res) => {
        if (err) return [];
        return resolve(res);
      });
    });
  }

  async Insert(entity: VehicleEntity): Promise<VehicleEntity | null> {
    return new Promise((resolve) => {
      connection.query(
        postQuery,
        [entity.name, entity.model, entity.year, entity.color, entity.price],
        (err, rows) => {
          if (err) throw err;
          console.log("Row inserted with id = " + rows.insertId);
          return resolve(entity);
        }
      );
    });
  }

  async Get(id: number): Promise<VehicleEntity | null> {
    return new Promise((resolve) => {
      connection.query(getQuery, [id], (err, res) => {
        if (err) return null;
        return resolve(res[0]);
      });
    });
  }
}
