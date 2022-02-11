const express = require('express');
const validateJWT = require('../../middlewares/auth/validateJWT');
const validateBlogPost = require('../../middlewares/validateBlogPost');
const { create, getAll } = require('../../controllers/blogpostController');

const routes = express.Router();

routes.route('/post')
  .post(validateJWT, validateBlogPost, create)
  .get(validateJWT, getAll);

module.exports = routes;
