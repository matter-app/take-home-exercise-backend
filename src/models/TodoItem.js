import { Sequelize } from "sequelize";
import { sequelize } from "../sequelize";

export class TodoItem extends Sequelize.Model {}

TodoItem.init(
  {
    parentItemId: Sequelize.INTEGER,
    title: Sequelize.STRING,
    isCompleted: Sequelize.BOOLEAN
  },
  {
    sequelize,
    tableName: "todo_items"
  }
);

TodoItem.belongsTo(TodoItem, {
  foreignKey: "parentItemId"
});

TodoItem.hasMany(TodoItem, {
  foreignKey: "parentItemId"
});
