const express = require('express');

const routes = express.Router();

routes.route('/user')
  .post()
  .get();

module.exports = routes;