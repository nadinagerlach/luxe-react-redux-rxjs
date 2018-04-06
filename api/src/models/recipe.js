export default (sequelize, DataTypes) => sequelize.define('recipes', {
  name: {
    type: DataTypes.STRING,
  },
  recipe: {
    type: DataTypes.TEXT,
  },
});
