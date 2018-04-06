import { Sequelize } from 'sequelize';

import env from '../config/env';
import dbConfig from '../config/db.json';

const dbConfigEnv = dbConfig[env];

const connection = new Sequelize(dbConfigEnv.database, dbConfigEnv.username, dbConfigEnv.password, {
  host: dbConfigEnv.host,
  dialect: dbConfigEnv.dialect,
  logging: false,
  operatorsAliases: Sequelize.Op,
});

console.info('SETUP - Connecting db...');

export default connection
  .authenticate()
  .then(() => {
    console.info('INFO - Db connected.');
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the db', err);
  });
