"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador/controlador");
let router = express_1.Router();
router.get('/', (req, res) => res.send('Express:Backend | Mode:[API_RES]'));
router.get('/empleados', controlador_1.getAllEmpleados);
router.get('/empleado/:legajo', controlador_1.getEmpleado);
router.post('/insert', controlador_1.crearEmpleado); //insert
router.put('/update/:legajo', controlador_1.actualizarEmpleado); //update
router.delete('/delete/:legajo', controlador_1.eliminarEmpleado); //eliminar
exports.default = router;
