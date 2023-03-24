import express from "express";
import { BroController } from "../controllers/bro.controller";

const router = express.Router();

//llama a las funciones
//router.get("/all", BroController.getAllUsers);
router.get("/login/:username/:password", BroController.getUserByLogin);
router.get("/getTable/:user_id", BroController.getAllCryptosUser);
router.post("/add", BroController.addUser);

export default router;
module.exports = router;
