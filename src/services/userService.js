require('dotenv').config({ path: '../config/.env' });
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const create = async (body) => {
  const { email } = body;
  const userExist = await User.findOne({ where: { email } });
  
  if (userExist) {
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
