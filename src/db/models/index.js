import { Sequelize } from "sequelize";
import { sequelize } from "../sequelize";
import { TodoItem } from "./TodoItem";

export const models = {
  TodoItem: TodoItem.init(sequelize, Sequelize)
};
