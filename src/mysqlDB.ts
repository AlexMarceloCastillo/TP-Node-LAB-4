import { createPool } from "mysql";

export const conexionMysql = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp4',
    connectionLimit: 100
});