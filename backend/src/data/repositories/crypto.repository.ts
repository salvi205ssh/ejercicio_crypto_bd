import { connect } from "../config/bro.db.config";
import { CryptoPojo } from "../models/crypto.model";

export class CryptoRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(CryptoPojo);
  }

  async getAllCryptos(): Promise<CryptoPojo[]> {
    try {
      const cryptos = await this._userRepository.findAll();
      console.log("recuperando monedas en repository");
      return cryptos;
    } catch (error) {
      console.error("Error recuperando monedas en repository");
      console.error(error);
      return [];
    }
  }
}
