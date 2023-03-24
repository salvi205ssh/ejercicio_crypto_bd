import express from "express";
import { CryptoController } from "../controllers/crypto.controller";

const router = express.Router();

//llama a las funciones
router.get("/all", CryptoController.getAllCryptos);


export default router;
module.exports = router;
