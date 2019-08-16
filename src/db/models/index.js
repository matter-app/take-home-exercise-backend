import { Sequelize } from "sequelize";
import { sequelize } from "../sequelize";
import { Task } from "./Task";

export const models = {
  Task: Task.init(sequelize, Sequelize)
};
