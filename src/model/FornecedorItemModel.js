import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";
import { Item } from "./ItemModel.js";
import {Fornecedor} from "./FornecedorModel.js";

config();

export const FornecedorItem = database.define("FornecedorItem", {
    idfornecedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Fornecedor,
            key: "idfornecedor"
        }
    },
    iditem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Item,
            key: "iditem"
        }
    }
}, {
    tableName: "fornecedor_item",
    schema: process.env.DB_SCHEMA,
    timestamps: false
});