import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";
import { Grao } from "./GraoModel.js";

config()
export const Safra = database.define("Safra", {
  idsafra: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  datainicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  datafim: {
    type: DataTypes.DATE
  },
  quantidadeprevista: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idgrao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Grao,
      key: "idgrao"
    }
  }
}, {
  tableName: "safra",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});
