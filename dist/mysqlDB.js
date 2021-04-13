"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexionMysql = void 0;
const mysql_1 = require("mysql");
exports.conexionMysql = mysql_1.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp4',
    connectionLimit: 100
});
