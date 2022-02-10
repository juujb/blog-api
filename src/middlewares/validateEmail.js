// regex from src: https://www.abstractapi.com/tools/email-regex-guide, because I hate regex again
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

module.exports = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }

  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};