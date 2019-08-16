import { Sequelize } from "sequelize";

export class TodoItem extends Sequelize.Model {
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
    this.parent = this.belongsTo(models.TodoItem, {
      foreignKey: "parentId"
    });

    this.children = this.hasMany(models.TodoItem, {
      foreignKey: "parentId"
    });
  }
}
