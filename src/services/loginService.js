require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByEmail } = require('./userService');

const secret = process.env.JWT_SECRET;

const login = async (body) => {
  const { email, password } = body;

  const user = await findByEmail(email);

  if (!user || user.password !== password) {
    return { code: 400, message: 'Invalid fields' };
  }

  const token = jwt.sign(
    { data: { email } },
    secret, 
    {
      algorithm: 'HS256',
      expiresIn: '7d',
    },
  );

  return { code: 200, token };
};

module.exports = { login };