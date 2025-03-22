import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { config } from "dotenv";
import { Produto } from "./ProdutoModel.js";
import { Pedido } from "./PedidoModel.js";

config()
export const Item = database.define("Item", {
  iditem: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idpedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pedido,
      key: "idpedido"
    }
  },
  idproduto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references : {
      model: Produto,
      key: "idproduto"
    }
  }
}, {
  tableName: "item",
  schema: process.env.DB_SCHEMA,
  timestamps: false
});