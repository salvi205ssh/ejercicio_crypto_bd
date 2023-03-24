"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroPojo = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let BroPojo = class BroPojo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
        references: "user_id",
    }),
    __metadata("design:type", Number)
], BroPojo.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: "username",
    }),
    __metadata("design:type", String)
], BroPojo.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: "password",
    }),
    __metadata("design:type", String)
], BroPojo.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: "fullname",
    }),
    __metadata("design:type", String)
], BroPojo.prototype, "fullname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: "birthdate",
    }),
    __metadata("design:type", String)
], BroPojo.prototype, "birthdate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: "deposit",
    }),
    __metadata("design:type", Number)
], BroPojo.prototype, "deposit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: "createdAt",
    }),
    __metadata("design:type", Date)
], BroPojo.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: "updateAt",
    }),
    __metadata("design:type", Date)
], BroPojo.prototype, "updateAt", void 0);
BroPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: "public",
        tableName: "cryptobros",
    })
], BroPojo);
exports.BroPojo = BroPojo;
