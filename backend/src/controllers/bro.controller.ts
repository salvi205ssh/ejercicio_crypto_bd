import { BroService } from "../services/bro.services";

// Crea una instancia del servicio de usuario
const broService: BroService = new BroService();

export const BroController = {
  /*   getAllUsers: (_req: any, res: any) => {
    broService
      .getAllUsers()
      .then((result) => {
        res.json(result);
      })
      .catch((exception) => {
        console.log(exception);
        res.sendStatus(500);
      });
  }, */

  addUser: (req: any, res: any) => {
    try {
      const newUser = req.body;
      broService.addUser(newUser).then((result) => {
        // Envía una respuesta con el resultado de la operación
        console.log("añadiendo user en controller");

        res.json(result);
      });
    } catch (exception) {
      console.log(exception);
      console.error("ERROR añadiendo user en controller");

      res.sendStatus(500);
    }
  },

  getAllCryptosUser: (req: any, res: any) => {
    const user_id = req.params.user_id;

    broService
      .getAllCryptosUser(user_id)
      .then((result) => {
        console.log("obteniendo cryptos de users en controller");

        res.json(result);
      })
      .catch((exception) => {
        console.log("Error obteniendo cryptos de users en controller");

        console.log(exception);
        res.sendStatus(500);
      });
  },

  getUserByLogin: (req: any, res: any) => {
    try {
      //el + es un tipado forzado, obliga a que sea un numero
      const username = req.params.username;
      const password = req.params.password;
      broService.getLogin(username, password).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
