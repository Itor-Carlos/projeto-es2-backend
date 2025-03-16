import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";
import { BaseModelMethods } from "./BaseModelMethods.js";

config()
export const Fornecedor = database.define("Fornecedor", {
  idfornecedor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  documento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  razaosocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "fornecedor",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});

Object.assign(Fornecedor, BaseModelMethods);