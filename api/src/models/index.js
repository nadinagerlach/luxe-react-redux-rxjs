import Sequelize from 'sequelize';

import databaseConnection from '../setup/databaseConnection';

const models = {
  Recipe: databaseConnection.import('./recipe'),
  Cigar: databaseConnection.import('./cigar'),
  Location: databaseConnection.import('./location'),

};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;
