const express = require('express');
const validateCategory = require('../../middlewares/validateCategory');
const validateJWT = require('../../middlewares/auth/validateJWT');
const { create, getAll } = require('../../controllers/categoryController');

const routes = express.Router();

routes.route('/categories')
  .post(validateJWT, validateCategory, create)
  .get(validateJWT, getAll);

module.exports = routes;
