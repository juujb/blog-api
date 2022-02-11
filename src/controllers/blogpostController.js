const blogpostService = require('../services/blogpostService');

const create = async (req, res) => {
  const { user: { id }, body } = req;
  const { title, content, categoryIds } = body;
  const { code, message, post } = await blogpostService.create({
    id, title, content, categoryIds,
  });

  if (message) return res.status(code).json({ message });

  res.status(code).json(post);
};

const getAll = async (_req, res) => {
  const { code, message, posts } = await blogpostService.getAll();

  if (message) return res.status(code).json({ message });

  res.status(code).json(posts);
};

module.exports = { create, getAll };