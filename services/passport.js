const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// create an instance of the User model
const User = mongoose.model('users');

// encode user id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// decode user id
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// tell the passport library that it should make use of the local strategy inside our app
passport.use(
  new LocalStrategy(function (email, password, done) {
    // check if user already exits inside the users collection
    User.findOne({ email: email }, function (err, user) {
      console.log('User with email' + email + ' attempted to log in.');
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (password !== user.password) {
        return done(null, false);
      } // null tells passport there was no error and we pass the user info
      return done(null, user);
    });
  })
);
