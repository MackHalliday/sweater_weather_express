require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];

var indexRouter = require('./routes/index');
var papersRouter = require('./routes/api/v1/papers');
var forecastRouter = require('./routes/api/v1/forecast');
var favoritesRouter = require('./routes/api/v1/favorites');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/papers', papersRouter);
app.use('/api/v1/forecast', forecastRouter);
app.use('/api/v1/favorites', favoritesRouter);

module.exports = app;
