import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";

config();

export const FornecedorItem = database.define("FornecedorItem", {
    idfornecedor: {
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
    tableName: "fornecedor_item",
    schema: process.env.DB_SCHEMA,
    timestamps: false
});