import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config()
export const Grao = database.define("Grao", {
  idgrao: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tempomaturacao: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  periodoplantioinicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  periodoplantiofim: {
    type: DataTypes.DATE,
  },
  coeficienterendimento: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: "grao",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
