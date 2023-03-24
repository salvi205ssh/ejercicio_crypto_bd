import express from "express";
import { connect } from "./data/config/bro.db.config";
import routerBro from "./routes/bro.routes";
import routerCrypto from "./routes/crypto.routes";
import routerWallet from "./routes/wallet.routes"
import cors from "cors";

const app = express();

//en el formato que se devuelve
app.use(express.json());

//antes del router
const allowedOrigins = ["http://localhost:4200"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

//usa el router de usuarios
app.use("/bros", routerBro);
app.use("/cryptos", routerCrypto);
app.use("/wallet", routerWallet)

const PORT = 8532;

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

async function main() {
  try {
    connect();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

export default app;

//alt + shift + o
