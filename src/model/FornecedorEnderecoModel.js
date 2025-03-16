import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

config();

export const FornecedorEndereco = database.define("FornecedorEndereco", {
  idfornecedor: {
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
  tableName: "fornecedor_endereco",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});