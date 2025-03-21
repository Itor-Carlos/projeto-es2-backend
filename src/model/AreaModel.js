import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config()
export const Area = database.define("Area", {
  idarea: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  hectares: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  emuso: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  tableName: "area",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
