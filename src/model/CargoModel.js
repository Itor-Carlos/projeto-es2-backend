import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

config();

export const Cargo = database.define(
  "Cargo",
  {
    idcargo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    tableName: "cargo",
    schema: process.env.DB_SCHEMA,
    timestamps: false,
  }
);