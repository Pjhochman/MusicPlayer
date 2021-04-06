require('./db');
const express = require('express');
const app = express();
const apiHandler = require('./api');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('./db');
const dotenv = require('dotenv').config();
var cors = require('cors');

cors({ credentials: true, origin: '*' });
console.log(cors);
app.use(
  //check cookie.secure
  session({
    secret: 'testing',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 1e3 /* ms */ * 60 /* s */ * 60 /* m */ * 2 /* hr */,
      sameSite: true,
      secure: false,
    },
    resave: false,
    rolling: false,
    saveUninitialized: false,
    unset: 'destroy',
  }),
);
//funnel all requests through these

const redirectUnauthorized = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  next();
};
app.use('/api', apiHandler); // API
app.use('/uploads', express.static('./uploads/'));
app.use('/js', express.static('./frontend/src/js/'));
app.use('/css', express.static('./frontend/src/styles/css/'));

app.get('/home.html', [
  redirectUnauthorized,
  express.static('./frontend/public/'),
]);
app.get('/order_id.html', [
  redirectUnauthorized,
  express.static('./frontend/public/'),
]);
app.get('/orders.html', [
  redirectUnauthorized,
  express.static('./frontend/public/'),
]);
app.get('/product_id.html', [
  redirectUnauthorized,
  express.static('./frontend/public/'),
]);
app.get('/products.html', [
  redirectUnauthorized,
  express.static('./frontend/public/'),
]);
app.get('/', express.static('./frontend/public/'));
app.use('/', express.static('./frontend/public/'));

//error handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS,GET,PUT,POST,DELETE',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type',
  );
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
