export default (sequelize, DataTypes) => {
  return sequelize.define('recipes', {
    name: {
      type: DataTypes.STRING,
    },
    recipe: {
      type: DataTypes.TEXT,
    },
  });
}
