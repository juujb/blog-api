const express = require('express');
const { create, getAll, getById } = require('../../controllers/userController');
const validateEmail = require('../../middlewares/validateEmail');
const validateName = require('../../middlewares/validateName');
const validatePwd = require('../../middlewares/validatePwd');
const validateJWT = require('../../middlewares/auth/validateJWT');

const routes = express.Router();

routes.route('/user')
  .post(validateEmail, validatePwd, validateName, create)
  .get(validateJWT, getAll);

routes.route('/user/:id')
  .get(validateJWT, getById);

module.exports = routes;