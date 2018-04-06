import Sequelize from 'sequelize';

import dbConnection from '../setup/dbConnection';

const models = {
  Recipe: dbConnection.import('./recipe'),
  Cigar: dbConnection.import('./cigar'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Sequelize = dbConnection;
models.Sequelize = Sequelize;

export default models;
