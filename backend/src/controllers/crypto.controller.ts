import { CryptoService } from "../services/crypto.services";

// Crea una instancia del servicio de usuario
const cryptoService: CryptoService = new CryptoService();

export const CryptoController = {
  getAllCryptos: (_req: any, res: any) => {
    cryptoService
      .getAllCryptos()
      .then((result) => {
        console.log("Obyeniendo cryptos desde controller");
        res.json(result);
      })
      .catch((exception) => {
        console.log("Error Obyeniendo cryptos desde controller");

        console.log(exception);
        res.sendStatus(500);
      });
  },
}