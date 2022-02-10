const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });

  return { code: 201, category };
};

module.exports = { create };