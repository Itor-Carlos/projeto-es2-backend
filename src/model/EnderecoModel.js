import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config()
export const Endereco = database.define("Endereco", {
  idendereco: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "endereco",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});