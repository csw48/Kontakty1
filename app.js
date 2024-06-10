const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const dbConfig = require('./config/database.config.js');
const app = express();
app.use(require('serve-static')(__dirname + '/public'));
app.use(require('cookie-parser')());





mongoose.Promise = global.Promise;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use('/', indexRouter);




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
