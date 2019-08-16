import { Sequelize } from "sequelize";
import { sequelize } from "../sequelize";
import { Ticket } from "./Ticket";

export const models = {
  Ticket: Ticket.init(sequelize, Sequelize)
};
