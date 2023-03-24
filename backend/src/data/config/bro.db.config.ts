import { WalletPojo } from './../models/wallet.model';
import { CryptoPojo } from './../models/crypto.model';
import { Sequelize } from "sequelize-typescript";
import { BroPojo } from "../models/bro.model";

export const connect = () => {
  const hostname = "localhost";
  const port = 5432;
  const userName = "postgres";
  const password = "M@rte2025";
  const database = "cryptos";
  const schema = "public";
  const dialect: any = "postgres";

  const sequelize = new Sequelize(database, userName, password, {
    host: hostname,
    port: port,
    dialect,
    repositoryMode: true,
    schema: schema,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  sequelize.addModels([BroPojo]);
  sequelize.addModels([CryptoPojo]);
  sequelize.addModels([WalletPojo]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
};
