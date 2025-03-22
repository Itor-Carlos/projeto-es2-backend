import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config();

export const Produto = database.define("Produto", {
  idproduto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  precounitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  tableName: "produto",
  schema: process.env.DB_SCHEMA,
  timestamps: false,
});