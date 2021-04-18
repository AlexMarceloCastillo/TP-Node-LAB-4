import { Request, Response } from "express";

import { conexionMysql } from '../mysqlDB';

export const getEmpleado = (req: Request, res: Response) => new Promise((resolve, reject) => {
    const legajoEmpleado = parseInt(req.params.legajo);
    conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('SELECT * FROM empleados WHERE legajo = ?', [legajoEmpleado], (err, results) => {
            if (err) console.error(err);
            res.send(results)
        });
    });
});

export const getAllEmpleados = (req: Request, res: Response) => new Promise((resolve, reject) => {
    conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM empleados', (err, results) => {
            if (err) console.error(err);
            res.send(results)
        });
    });
});

export const crearEmpleado = (req: Request, res: Response) => new Promise((resolve, reject) => {
    const {nombre, apellido, dni, sector, fecha_ingreso, activo} = req.body;
    var values = [nombre, apellido, dni, sector, fecha_ingreso, activo];
    conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        } else {
            let sql: string = 'INSERT INTO empleados(nombre, apellido, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({
                        message: "Error al tratar de crear empleado"
                    })
                } else {
                    res.json({
                        message: "Empleado creado con éxito"
                    })
                }
            });
        }
    });
});

export const actualizarEmpleado = (req:Request, res:Response) => new Promise((resolve, reject) => {
    const {legajo, nombre, apellido, dni, sector, fecha_ingreso, activo} = req.body;
    var values = [nombre, apellido, dni, sector, fecha_ingreso, legajo];
    conexionMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'UPDATE empleados SET nombre=?, apellido=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?';
            connection.query(sql, values, (err, results) => {
                if (err) {
                  console.error(err);
                  res.json({message:"Error al actualizar " + err})
                }else{
                  res.json({message:"Articulo Actualizado con exito"})
                }
               
              });
        }          
      });
});

export const eliminarEmpleado = (req:Request, res:Response) => new Promise((resolve, reject) => {
    const legajoEmpleado = parseInt(req.params.legajo);
    conexionMysql.getConnection((err, connection) => {
          if (err) {
            console.error(err);
            res.send(err);
            return;
          }
          connection.query('DELETE FROM empleados WHERE legajo = ?', [legajoEmpleado],(err, results) => {
          if (err) {
            console.error(err);
            res.json({message:"Error al tratar de Eliminar Empleado"})
          }else{
            res.json({message:"Empleado Eliminado con exito"})
          }
          
        });
      });
});