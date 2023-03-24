import { BroRepository } from "../data/repositories/bro.repository";
import { BroDto, NewUserDto } from "../types";
import { BroPojo } from "../data/models/bro.model";

export class BroService {
  _userRepository: BroRepository;

  constructor() {
    this._userRepository = new BroRepository();
    
  }

  /*   async getAllUsers(): Promise<BroDto[]> {
    const usersPromise = await this._userRepository
      .getAllUsers()
      .then((result) => {
        let usersAsDto: BroDto[] = [];
        result.forEach((usersAsPojo) => {
          let userAsDto = this.parsePojoIntoDto(usersAsPojo);
          usersAsDto.push(userAsDto);
        });
        return usersAsDto;
      })
      .catch((error) => {
        console.error("Error al recuperar usuarios");
        console.error(error);
        throw error;
      });
    return usersPromise;
  } */

  async addUser(bro: NewUserDto): Promise<BroDto> {
    const broPjo: BroPojo = this.parseDtoIntoPojo(bro);

    const broPromise = await this._userRepository
      .addUser(broPjo)
      .then((bro) => {
        console.log("añadiendo user en service");

        return bro as BroDto;
      })
      .catch((error) => {
        console.error(error);
        console.error("ERROR añadiendo user en service");

        throw error;
      });

    return broPromise;
  }

  async getAllCryptosUser(user_id: string): Promise<any[]> {
    const usersPromise = await this._userRepository
      .getAllCryptosUser(user_id)
      .then((result) => {
        let usersAsDto: any[] = [];
        result.forEach((usersAsPojo) => {
          let userAsDto = usersAsPojo;
          usersAsDto.push(userAsDto);
        });
        console.log("obteniendo cryptos de users en service");

        return usersAsDto;
      })
      .catch((error) => {
        console.error("ERROR obteniendo cryptos de users en service");
        console.error(error);

        throw error;
      });
    return usersPromise;
  }

  async getLogin(username: string, password: string): Promise<BroDto> {
    const usersPromise = await this._userRepository
      .getLogin(username, password)
      .then((result) => {
        /* let usersAsDto: BroDto = this.parsePojoIntoDto(result[0]);
        console.log(usersAsDto);

        return usersAsDto; */
        if (!result) {
          return undefined;
        }

        return this.parsePojoIntoDto(result);
      })
      .catch((error) => {
        console.error("Error al recuperar usuarios");
        console.error(error);
        throw error;
      });
    return usersPromise;
  }

  parsePojoIntoDto(broPojo: BroPojo): BroDto {
    const broDto: BroDto = {
      user_id: broPojo.user_id,
      username: broPojo.username,
      password: broPojo.password,
      fullname: broPojo.fullname,
      birthdate: broPojo.birthdate,
      deposit: broPojo.deposit,
    };
    return broDto;
  }

  parseDtoIntoPojo(userDto: NewUserDto): BroPojo {

    return userDto as BroPojo;
  }
}
