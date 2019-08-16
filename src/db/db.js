import { sequelize } from "./sequelize";
import { models } from "./models";

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

export { sequelize, models };
