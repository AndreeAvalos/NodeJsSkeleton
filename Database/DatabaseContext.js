"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const connection = mysql_1.default.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DATABASEPORT),
});
connection.connect((error) => {
    if (error)
        throw error;
    console.log("Successfully connected to the database.");
});
exports.default = connection;
