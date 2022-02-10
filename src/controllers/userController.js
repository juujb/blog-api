const userService = require('../services/userService');

const create = async (req, res) => {
  const { body } = req;
  const { message, code, token } = await userService.create(body);
 
  if (message) return res.status(code).json({ message });

  res.status(code).json({ token });
};

const getAll = async (req, res) => {
  const { message, code, users } = await userService.getAll();

  if (message) return res.status(code).json({ message });

  res.status(code).json(users);
};

module.exports = { create, getAll }; 