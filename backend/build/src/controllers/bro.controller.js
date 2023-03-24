"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroController = void 0;
const bro_services_1 = require("./../services/bro.services");
// Crea una instancia del servicio de usuario
const broService = new bro_services_1.BroService();
exports.BroController = {
    getAllUsers: (_req, res) => {
        broService
            .getAllUsers()
            .then((result) => {
            res.json(result);
        })
            .catch((exception) => {
            console.log(exception);
            res.sendStatus(500);
        });
    },
};
