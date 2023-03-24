"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroService = void 0;
const bro_repository_1 = require("../data/repositories/bro.repository");
class BroService {
    constructor() {
        this._userRepository = new bro_repository_1.BroRepository();
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersPromise = yield this._userRepository
                .getAllUsers()
                .then((usersAsPojo) => {
                let usersAsDto = [];
                usersAsPojo.forEach((usersAsPojo) => {
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
        });
    }
    parsePojoIntoDto(broPojo) {
        const broDto = {
            user_id: broPojo.dataValues.user_id,
            username: broPojo.dataValues.username,
            password: broPojo.dataValues.password,
            fullname: broPojo.dataValues.fullname,
            birthdate: broPojo.dataValues.birthdate,
            deposit: broPojo.dataValues.deposit,
        };
        return broDto;
    }
}
exports.BroService = BroService;
