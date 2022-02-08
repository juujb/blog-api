const express = require('express');
const { create } = require('../controllers/userController');
const validateEmail = require('../middlewares/validateEmail');
const validateName = require('../middlewares/validateName');
const validatePwd = require('../middlewares/validatePwd');

const routes = express.Router();

routes.route('/user')
  .post(validateEmail, validatePwd, validateName, create)
  .get();

module.exports = routes;