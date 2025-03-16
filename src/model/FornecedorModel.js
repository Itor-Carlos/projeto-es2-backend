import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

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

Fornecedor.findByEmail = async function(email) {
  return await this.findOne({ where: { email } });
}

Fornecedor.findByDocumento = async function(documento) {
  return await this.findOne({ where: { documento } });
}