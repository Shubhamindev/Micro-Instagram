'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    images: DataTypes.JSON,
  }, {});

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Post;
};
