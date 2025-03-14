import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

config();

export const FuncionarioEndereco = database.define("FuncionarioEndereco", {
  idfuncionario: {
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
  tableName: "funcionario_endereco",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
