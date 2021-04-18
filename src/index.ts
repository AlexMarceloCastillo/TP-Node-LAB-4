import express from "express";

import router from "./routes.index";

const server = express();

server.use(express.json());

server.use(express.urlencoded({extended:false}));

server.use(router);

server.listen(3000,()=>{
    console.log('Servidor iniciado en puerto 3000');
})