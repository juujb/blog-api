const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });

  return { code: 201, category };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { code: 200, categories };
};

module.exports = { create, getAll };