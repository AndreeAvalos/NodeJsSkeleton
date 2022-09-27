"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRepository = void 0;
const DatabaseContext_1 = __importDefault(require("../../Database/DatabaseContext"));
let postQuery = `INSERT INTO Agent(create_time,name,id_concessionaire) VALUES (NOW(), ?, ?);`;
let getQuery = `SELECT id, name, id_concessionaire as concessionaire FROM Agent WHERE id= ?;`;
let allQuery = `SELECT id, name, id_concessionaire as concessionaire FROM Agent;`;
class AgentRepository {
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                DatabaseContext_1.default.query(allQuery, (err, res) => {
                    if (err)
                        return [];
                    return resolve(res);
                });
            });
        });
    }
    Insert(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                DatabaseContext_1.default.query(postQuery, [entity.name, entity.concessionaire], (err, rows) => {
                    if (err)
                        throw err;
                    console.log("Row inserted with id = " + rows.insertId);
                    return resolve(entity);
                });
            });
        });
    }
    Get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                DatabaseContext_1.default.query(getQuery, [id], (err, res) => {
                    if (err)
                        return null;
                    return resolve(res[0]);
                });
            });
        });
    }
}
exports.AgentRepository = AgentRepository;
