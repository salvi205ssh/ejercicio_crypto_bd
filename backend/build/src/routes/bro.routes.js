"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bro_controller_1 = require("./../controllers/bro.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//llama a las funciones
router.get("/all", bro_controller_1.BroController.getAllUsers);
exports.default = router;
module.exports = router;
