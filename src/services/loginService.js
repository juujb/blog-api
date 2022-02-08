const jwt = require('jsonwebtoken');
const { findByEmail } = require('./userService');

const secret = process.env.JWT_SECRET;

const login = async (body) => {
  const { email } = body;

  const user = await findByEmail(email);

  if (!user) {
    return { code: 400, message: 'Invalid fields' };
  } 

  const { id } = user;

  const token = jwt.sign({ 
    id,
  },
  secret, 
  {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

  return { code: 200, token };

};

module.exports = { login };