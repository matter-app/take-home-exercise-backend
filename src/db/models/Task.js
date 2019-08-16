import { Sequelize } from "sequelize";

export class Task extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        parentId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        isCompleted: DataTypes.BOOLEAN
      },
      {
        sequelize,
        tableName: "todo_items"
      }
    );
  }

  static associate(models) {
    Task.hasMany(Task, { as: "children", foreignKey: "parentId" });
    Task.belongsTo(Task, { as: "parent", foreignKey: "parentId" });
  }
}
