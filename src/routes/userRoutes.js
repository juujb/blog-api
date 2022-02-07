const express = require('express');
const userController = require('../controllers/userController');

const routes = express.Router();

routes.route('/user')
  .post(userController.create)
  .get();

module.exports = routes;