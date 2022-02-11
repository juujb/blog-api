const { BlogPost, Category } = require('../models');

const create = async ({ id, title, content, categoryIds }) => {
  const post = await BlogPost.create({ userId: id, title, content });

  const category = await Category.findAll({ where: { id: categoryIds } });

  console.log(category);
  if (category.length === 0) {
    return { code: 400, message: '"categoryIds" not found' };
  }

  return { code: 201, post };
};

const getAll = async () => ({ code: 200, message: 'test' });

module.exports = { create, getAll };