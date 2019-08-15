import Sequelize from "sequelize";

export class TodoItem extends Sequelize.Model {}

TodoItem.init({
  parentItemId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  isCompleted: Sequelize.BOOLEAN
});

TodoItem.belongsTo(TodoItem, {
  foreignKey: "parentItemId"
});
TodoItem.hasMany(TodoItem);
