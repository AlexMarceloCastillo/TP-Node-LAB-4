import { Router } from "express";

import {getAllEmpleados, getEmpleado, crearEmpleado, actualizarEmpleado, eliminarEmpleado} from './controlador/controlador'

let router = Router();

router.get('/',(req,res)=>res.send('Express:Backend | Mode:[API_RES]'));

router.get('/empleados', getAllEmpleados);
router.get('/empleado/:legajo', getEmpleado);
router.post('/insert', crearEmpleado);//insert
router.put('/update/:legajo', actualizarEmpleado);//update
router.delete('/delete/:legajo', eliminarEmpleado);//eliminar

export default router;
