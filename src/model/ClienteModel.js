import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

config()
export const Cliente = database.define("Cliente", {
  idcliente: {
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "cliente",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});