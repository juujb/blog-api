const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const userRouter = require('../routes/userRoute');
const loginRouter = require('../routes/loginRoute');

const app = express();

app.use(bodyParser.json());
app.use(rescue(userRouter));
app.use(rescue(loginRouter));

module.exports = app;