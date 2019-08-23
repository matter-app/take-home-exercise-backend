import { Sequelize } from "sequelize";

export class Ticket extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        parentId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        isCompleted: DataTypes.BOOLEAN
      },
      {
        sequelize,
        tableName: "tickets"
      }
    );
  }

  static associate(models) {
    Ticket.hasMany(Ticket, { as: "children", foreignKey: "parentId" });
    Ticket.belongsTo(Ticket, { as: "parent", foreignKey: "parentId" });
  }
}
