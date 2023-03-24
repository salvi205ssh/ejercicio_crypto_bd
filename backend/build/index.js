"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// el paquete entero de express lo uso como variable mientras que con 
// una llava usamos la interfaz
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8532;
app.get('/ping', (_req, res) => {
    console.log('Funciona');
    let MESSAGE = 'Pong';
    res.send(MESSAGE);
});
app.get('/users/count', (_req, res) => {
    console.log('contando usuarios....');
    axios_1.default.get('https://jsonpleholder.typicode.com/users')
        .then((response) => {
        let userCount = response.data;
        if (!!userCount) {
            res.json(userCount.length);
        }
        else {
            res.json(0);
        }
    }).catch((error) => {
        res.status(404).send(error);
    });
});
app.get('/user/get/:id', (req, res) => {
    console.log('recuperando usuario');
    axios_1.default.get(`https://jsonpleholder.typicode.com/users/${req.params.id}`)
        .then(response => {
        let user = response.data;
        if (!!user && user.id) {
            res.json(user);
        }
        else {
            res.status(204).json('User not found');
        }
    })
        .catch(error => {
        res.status(404).send(error);
    });
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
