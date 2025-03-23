import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config();

export const ClienteEndereco = database.define("ClienteEndereco", {
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  idendereco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: "cliente_endereco",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
