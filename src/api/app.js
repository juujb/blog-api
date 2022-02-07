const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const userRouter = require('../routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(rescue(userRouter));

module.exports = app;