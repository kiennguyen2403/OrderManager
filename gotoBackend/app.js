var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require("./utils/logger");
const cors = require('cors');
var orderRouter = require('./routes/order');
var memberRouter = require('./routes/member');
var loginRouter = require("./routes/login")
const mongoose = require('mongoose');
const config = require('./utils/databaseconfig')
const middleware = require('./utils/middleware');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    logger.errorInfo('Error connecting to MongoDB:', error.message);
  });

  logger.info('connecting to', config.MONGODB_URI);


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/order', orderRouter);
app.use('/member', memberRouter);
app.use('/login',loginRouter)
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
