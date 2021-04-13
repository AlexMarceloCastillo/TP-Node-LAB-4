"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
router.get('/', (req, res) => res.send('Express:Backend | Mode:[API_RES]'));
exports.default = router;
