const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// connect to MongoDB
mongoose.connect(keys.mongoURI);

// create our express app
const app = express();

// tell express that it needs to use cookies
app.use(
  session({
    secret: keys.secret, // secret used to encrypt our cookie
    maxAge: 6 * 60 * 60 * 1000, // cookie lasts 6 hrs in milliseconds
    resave: true,
    saveUninitialized: true,
  })
);

// instruct passport that it needs to make use of cookies to handle authentication in our app
app.use(passport.initialize());
app.use(passport.session());

// attach our routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
