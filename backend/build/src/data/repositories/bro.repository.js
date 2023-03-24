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
exports.BroRepository = void 0;
const bro_db_config_1 = require("../config/bro.db.config");
const bro_model_1 = require("../models/bro.model");
class BroRepository {
    constructor() {
        this._database = {};
        this._database = (0, bro_db_config_1.connect)();
        this._userRepository = this._database.sequelize.getRepository(bro_model_1.BroPojo);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findAll();
            }
            catch (error) {
                console.error("Se ha producido un error al recuperar usuarios");
                console.error(error);
                return [];
            }
        });
    }
}
exports.BroRepository = BroRepository;
