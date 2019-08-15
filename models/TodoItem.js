import { Model } from "sequelize";

export class TodoItem extends Model {}

TodoItem.init({
  parentItemId: DataTypes.INTEGER,
  title: DataTypes.STRING,
  isCompleted: DataTypes.BOOLEAN
});

TodoItem.belongsTo(TodoItem, {
  foreignKey: "parentItemId"
});
TodoItem.hasMany(TodoItem);
