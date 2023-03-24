"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bro_model_1 = require("../models/bro.model");
const connect = () => {
    const DB_HOSTNAME = "localhost";
    const DB_PORT = 5432;
    const DB_NAME = "cryptos";
    const DB_USERNAME = "postgres";
    const DB_PASSWORD = "M@rte2025";
    const DB_SCHEMA = "public";
    const DB_DIALECT = "postgres";
    const sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
        repositoryMode: true,
        schema: DB_SCHEMA,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000, //Tiempo que puede estar haciendo nada, luego entra en reposo
        },
    });
    //vinculamos el pojo a la conexion
    sequelize.addModels([bro_model_1.BroPojo]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize; //este es la libreria
    db.sequelize = sequelize; //este es el creado arriba
    return db;
};
exports.connect = connect;
