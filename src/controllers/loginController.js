const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { body } = req;
  const { message, code, token } = await loginService.login(body);

  if (message) return res.status(code).json({ message });

  res.status(code).json({ token });
};

module.exports = { login };