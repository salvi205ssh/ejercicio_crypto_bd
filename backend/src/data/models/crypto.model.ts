import { NUMBER, STRING } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  freezeTableName: true,
  schema: "public",
  tableName: "cryptomonedas",
  createdAt: false,
  updatedAt: false,
})
export class CryptoPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  crypto_id: string;

  @Column({
    type: STRING,
    field: "crypto_name",
  })
  crypto_name: string;

  @Column({
    type: NUMBER,
    field: "value",
  })
  value: number;

  @Column({
    type: STRING,
    field: "icon",
  })
  icon: string;

  @Column({
    type: STRING,
    field: "asset",
  })
  asset: string;

  @Column({
    type: NUMBER,
    field: "stock",
  })
  stock: number;

  createdAt: Date;

  updateAt: Date;
}
