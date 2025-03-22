import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config();

export const ClienteItem = database.define("ClienteItem", {
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    iditem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: "cliente_item",
    schema: process.env.DB_SCHEMA,
    timestamps: false
});