"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpleado = exports.actualizarEmpleado = exports.crearEmpleado = exports.getAllEmpleados = exports.getEmpleado = void 0;
const mysqlDB_1 = require("../mysqlDB");
const getEmpleado = (req, res) => new Promise((resolve, reject) => {
    const legajoEmpleado = parseInt(req.params.legajo);
    mysqlDB_1.conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('SELECT * FROM empleados WHERE legajo = ?', [legajoEmpleado], (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getEmpleado = getEmpleado;
const getAllEmpleados = (req, res) => new Promise((resolve, reject) => {
    mysqlDB_1.conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM empleados', (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getAllEmpleados = getAllEmpleados;
const crearEmpleado = (req, res) => new Promise((resolve, reject) => {
    console.log(req.body);
    const { nombre, apellido, dni, sector, fecha_ingreso, activo } = req.body;
    var values = [nombre, apellido, dni, sector, fecha_ingreso, activo];
    mysqlDB_1.conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'INSERT INTO empleados(nombre, apellido, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({
                        message: "Error al tratar de crear empleado",
                        err: err
                    });
                }
                else {
                    res.json({
                        message: "Empleado creado con éxito"
                    });
                }
            });
        }
    });
});
exports.crearEmpleado = crearEmpleado;
const actualizarEmpleado = (req, res) => new Promise((resolve, reject) => {
    const { legajo, nombre, apellido, dni, sector, fecha_ingreso, activo } = req.body;
    console.log(req.body);
    console.log(req.params.legajo);
    var values = [nombre, apellido, dni, sector, fecha_ingreso, activo, legajo];
    mysqlDB_1.conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'UPDATE empleados SET nombre=?, apellido=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al actualizar ", err: err });
                }
                else {
                    res.json({ message: "Articulo Actualizado con exito" });
                }
            });
        }
    });
});
exports.actualizarEmpleado = actualizarEmpleado;
const eliminarEmpleado = (req, res) => new Promise((resolve, reject) => {
    const legajoEmpleado = req.params.legajo;
    console.log(legajoEmpleado);
    mysqlDB_1.conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('DELETE FROM empleados WHERE legajo = ?', [legajoEmpleado], (err, results) => {
            if (err) {
                console.error(err);
                res.json({ message: "Error al tratar de Eliminar Empleado", err: err });
            }
            else {
                res.json({ message: "Empleado Eliminado con exito" });
            }
        });
    });
});
exports.eliminarEmpleado = eliminarEmpleado;
