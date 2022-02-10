require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByEmail } = require('../../services/userService');

const secret = process.env.JWT_SECRET;

// regex from src: https://www.regextester.com/105777, because I hate regex
const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  if (!regex.test(token)) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  const decoded = jwt.verify(token, secret);

  const user = await findByEmail(decoded.data.email);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  req.user = user;

  next();
};