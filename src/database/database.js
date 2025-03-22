import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
export const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false,
    }
  }
});