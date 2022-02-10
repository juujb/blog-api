require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (body) => {
  const { email } = body;
  
  if (await findByEmail(email)) {
    return { code: 409, message: 'User already registered' };
  }
  
  await User.create(body);

  const token = jwt.sign(
    { data: { email } }, 
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '7d',
    },
  );

  return { code: 201, token };
};

const getAll = async () => {
  const users = await User.findAll();

  return { code: 200, users };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return { code: 404, message: 'User does not exist' };
  }

  return { code: 200, user };
};

module.exports = { create, findByEmail, getAll, getById };
