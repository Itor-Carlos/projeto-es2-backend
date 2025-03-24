import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";
import { Funcionario } from "./FuncionarioModel.js";
import { Cargo } from "./CargoModel.js";

config();

export const FuncionarioCargo = database.define(
  "FuncionarioCargo",
  {
    idfuncionario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Funcionario,
        key: "idfuncionario",
      }
    },
    idcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Cargo,
        key: "idcargo",
      }
    }
  },
  {
    tableName: "funcionario_cargo",
    schema: process.env.DB_SCHEMA,
    timestamps: false,
  }
);