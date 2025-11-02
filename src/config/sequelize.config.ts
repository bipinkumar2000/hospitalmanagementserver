import { Dialect, Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const DATABASE = process.env.APP_DB_NAME || "hospital-management";
const HOST = process.env.APP_DB_HOST || "localhost";
const USER = process.env.APP_DB_USERNAME || "";
const SECRET = process.env.APP_DB_PASSWORD || "";
const DIALECT: Dialect = "mysql";

const sequelize = new Sequelize(DATABASE, USER, SECRET, {
  host: HOST,
  dialect: DIALECT,
});

export default sequelize;
