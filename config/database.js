import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";

const configs = {
  test: {
    dialect: "sqlite",
    storage: ":memory:", // Banco em memória
    logging: false,
  },
  development: {
    // Sua configuração atual do Postgres
    dialect: "postgres",
    host: process.env.DB_HOST,
    // ... (outras configs)
  },
};

const config = configs[env];
export const sequelize = new Sequelize(config);