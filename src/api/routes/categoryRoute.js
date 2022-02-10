const express = require('express');
const validateCategory = require('../../middlewares/validateCategory');
const validateJWT = require('../../middlewares/auth/validateJWT');
const { create } = require('../../controllers/categoryController');

const routes = express.Router();

routes.route('/categories')
  .post(validateJWT, validateCategory, create);

module.exports = routes;
