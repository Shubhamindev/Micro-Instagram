'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    mobile_number: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: DataTypes.TEXT,
    post_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {});
  
  User.associate = (models) => {
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
  };

  return User;
};
