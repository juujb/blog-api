const express = require('express');
const { login } = require('../../controllers/loginController');
const validateLogin = require('../../middlewares/validateLogin');

const routes = express.Router();

routes.route('/login')
  .post(validateLogin, login);

module.exports = routes;
