import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";
import { BaseModelMethods } from "./BaseModelMethods.js";

config()
export const Funcionario = database.define("Funcionario", {
  idfuncionario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  documento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contratacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }, 
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  
}, {
  tableName: "funcionario",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});

Object.assign(Fornecedor, BaseModelMethods);