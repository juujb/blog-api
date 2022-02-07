const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(userRouter);

module.exports = app;