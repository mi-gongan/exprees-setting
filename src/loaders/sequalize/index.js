import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import config from "../../config/index.js";

const { host, user, database, password } = config.db;

export default new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});
