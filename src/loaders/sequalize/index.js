import Sequelize from 'sequelize';
import config from '../../config/index.js';

const { host, user, database, password } = config.db;

export default new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});
