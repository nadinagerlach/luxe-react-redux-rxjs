export default (sequelize, DataTypes) => {
  return sequelize.define('locations', {
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.TEXT,
    },
  });
}
