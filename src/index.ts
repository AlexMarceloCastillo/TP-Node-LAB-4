import express from "express";

import router from "./routes.index";

import cors from 'cors';

const server = express();

server.use(express.json());

server.use(cors())

server.use(express.urlencoded({extended:false}));

server.use(router);

server.listen(3000,()=>{
    console.log('Servidor iniciado en puerto 3000');
})
