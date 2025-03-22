import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";
import { BaseModelMethods } from "./BaseModelMethods.js";

config()
export const Pedido = database.define("Pedido", {
    idpedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    }
}, {
    tableName: "pedido",
    schema: process.env.DB_SCHEMA,
    timestamps: false
});
