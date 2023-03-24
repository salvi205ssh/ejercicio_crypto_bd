import { CryptoRepository } from "./../data/repositories/crypto.repository";
import { CryptoMonedaDto } from "./../types";
import { CryptoPojo } from "../data/models/crypto.model";

export class CryptoService {
  _userRepository: CryptoRepository;

  constructor() {
    this._userRepository = new CryptoRepository();
  }

  async getAllCryptos(): Promise<CryptoMonedaDto[]> {
    const cryptoPromise = await this._userRepository
      .getAllCryptos()
      .then((result) => {
        let cryptoAsDto: CryptoMonedaDto[] = [];
        result.forEach((cryptoAsPojo) => {
          let userAsDto = this.parsePojoIntoDto(cryptoAsPojo);
          cryptoAsDto.push(userAsDto);
        });
        console.log("Obyeniendo cryptos desde controller");

        return cryptoAsDto;
      })
      .catch((error) => {
        console.error("Obyeniendo cryptos desde controller");
        console.error(error);
        throw error;
      });
    return cryptoPromise;
  }

  parsePojoIntoDto(cryptoPojo: CryptoPojo): CryptoMonedaDto {
    const cryptoDto: CryptoMonedaDto = {
      crypto_id: cryptoPojo.crypto_id,
      crypto_name: cryptoPojo.crypto_name,
      value: cryptoPojo.value,
      icon: cryptoPojo.icon,
      asset: cryptoPojo.asset,
      stock: cryptoPojo.stock,
    };

    return cryptoDto;
  }
}
