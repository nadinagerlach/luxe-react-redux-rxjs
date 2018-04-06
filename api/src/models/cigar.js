export default (sequelize, DataTypes) => sequelize.define('cigars', {
  name: {
    type: DataTypes.STRING,
  },
  cigar: {
    type: DataTypes.TEXT,
  },
});

