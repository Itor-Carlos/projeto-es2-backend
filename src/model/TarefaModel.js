import { DataTypes } from "sequelize";
import { database } from "../../database.js";
import { config } from "dotenv";

config()

export const Tarefa = database.define("Tarefa", {
    idtarefa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    datainicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    datafim: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: "tarefa",
    schema: process.env.DB_SCHEMA,
    timestamps: false
});