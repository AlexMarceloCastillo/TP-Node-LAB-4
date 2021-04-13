"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_index_1 = __importDefault(require("./routes.index"));
const server = express_1.default();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(routes_index_1.default);
server.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});
