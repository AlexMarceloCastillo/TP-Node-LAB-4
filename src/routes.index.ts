import { Router } from "express";


let router = Router();

router.get('/',(req,res)=>res.send('Express:Backend | Mode:[API_RES]'));


export default router;