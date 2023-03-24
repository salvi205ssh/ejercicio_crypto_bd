import { QueryTypes } from "sequelize";
import { connect } from "../config/bro.db.config";
import { BroPojo } from "../models/bro.model";
import { v4 as uuid } from "uuid";

export class BroRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(BroPojo);
  }

  /*   async getAllUsers(): Promise<BroPojo[]> {
    try {
      const users = await this._userRepository.findAll();
      console.log("Bros::", users);
      return users;
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuarios");
      console.error(error);
      return [];
    }
  } */

  async addUser(newUser: BroPojo): Promise<BroPojo> {
    try {
      newUser.user_id = uuid();
      newUser = await this._userRepository.create(newUser);
      console.log("añadiendo user en repository");

      return newUser;
    } catch (error) {
      console.error(
        "Se ha producido un error al insertar usuario en repository"
      );
      console.error(error);
      return null;
    }
  }

  async getLogin(username: string, password: string): Promise<BroPojo> {
    let user: BroPojo = {} as BroPojo;
    try {
      /*   user = await this._database.sequelize.query(
        "SELECT * FROM public.cryptobros where username=? and password=?", {
          replacements: [username, password],
          type: QueryTypes.SELECT
        }
      ); */

      return await this._userRepository.findOne({
        where: { username: username, password: password },
      });
      console.log("Bros::", user);
    } catch (error) {
      console.error("Se ha producido un error al recuperar usuarios");
      console.error(error);
      throw error;
    }
    return user;
  }

  async getAllCryptosUser(user_id: string): Promise<any[]> {
    try {
      const coinsUser = await this._database.sequelize.query(
        "SELECT cryptobros.user_id, cryptomonedas.crypto_id, cryptobros.deposit, cryptomonedas.asset, cryptomonedas.icon, cryptomonedas.crypto_name, cryptomonedas.value, cryptomonedas.stock, cryptos_bro.amount FROM cryptobros JOIN cryptos_bro ON cryptobros.user_id = cryptos_bro.user_id JOIN cryptomonedas ON cryptos_bro.crypto_id = cryptomonedas.crypto_id WHERE cryptobros.user_id =?",
        {
          replacements: [user_id],
          type: QueryTypes.SELECT,
        }
      );

      console.log("obteniendo cryptos de users en repository");
      return coinsUser;
    } catch (error) {
      console.error(
        "Se ha producido un error al recuperar las cryptos en repository"
      );
      console.error(error);
      return [];
    }
  }
}
