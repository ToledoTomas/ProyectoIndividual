const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('platform', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
