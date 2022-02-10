const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const userRouter = require('./routes/userRoute');
const loginRouter = require('./routes/loginRoute');
const categoryRouter = require('./routes/categoryRoute');

const app = express();

app.use(bodyParser.json());
app.use(rescue(userRouter));
app.use(rescue(loginRouter));
app.use(rescue(categoryRouter));

module.exports = app;