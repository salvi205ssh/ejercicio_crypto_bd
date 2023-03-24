"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bro_routes_1 = __importDefault(require("./routes/bro.routes"));
// el paquete entero de express lo uso como variable mientras que con
//export default permite ponerle el nombre que queramos
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8532;
//llamada de prueba
app.get("/ping", (_req, res) => {
    console.log("Han hecho ping");
    let MESSAGE = "Pong";
    res.send(MESSAGE);
});
//usa el router de usuarios
app.use("/bros", bro_routes_1.default);
app.listen(PORT, () => {
    // Esto siempre lo ultimo de todo
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
//alt + shift + o
