import { Sequelize } from "sequelize";
import path from "path";

const dbPath = path.join(__dirname, "../../", "database.sqlite3");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath
});
