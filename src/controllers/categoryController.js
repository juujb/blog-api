const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  const { code, message, category } = await categoryService.create(name);

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json(category);
};

const getAll = async (_req, res) => {
  const { message, code, categories } = await categoryService.getAll();

  if (message) return res.status(code).json({ message });

  res.status(code).json(categories);
};

module.exports = { create, getAll };