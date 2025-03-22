import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";
import { Tarefa } from "./TarefaModel.js";
import { Funcionario } from "./FuncionarioModel.js";

config();

export const FuncionarioTarefa = database.define("FuncionarioTarefa", {
  idfuncionario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Funcionario,
      key: "idfuncionario"
    }
  },
  idtarefa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Tarefa,
      key: "idtarefa"
    }
  }
}, {
  tableName: "funcionario_tarefa",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
