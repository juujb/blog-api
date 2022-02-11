const BlogPost = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogpost;
};

module.exports = BlogPost;