import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config()
export const Fertilizante = database.define("Fertilizante", {
  idfertilizante: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  composicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estadofisico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  periodoaplicacaodias: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: "fertilizante",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
