const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  const { code, message, category } = await categoryService.create(name);

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json(category);
};

module.exports = { create };