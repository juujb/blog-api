require('dotenv').config({ path: '../config/.env' });
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const secret = process.env.JWT_SECRET;

const create = async (body) => {
  const { email } = body;
  const user = await User.findAll({ where: { email } });

  if (!user) {
    return { code: 409, message: 'User already registered' };
  }

  const newUser = await User.create(body);

  const token = jwt.sign(
    { id: newUser.id }, 
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '7d',
    },
  );

  return { code: 201, token };
};

module.exports = { create };
