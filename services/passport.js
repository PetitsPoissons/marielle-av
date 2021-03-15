const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
const keys = require('../config/keys');

// encode user id
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// decode user id
// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });

// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: keys.jwtSecret,
    },
    async (jwtPayload, done) => {
      try {
        // find the user specified in token
        const user = await User.findById(jwtPayload.sub);
        // if user doesn't exist, handle it
        if (!user) {
          return done(null, false);
        }
        // otherwise, return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// LOCAL STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      // find the user given the email
      const user = await User.findOne({ email });

      // if no user found, handle it
      if (!user) {
        return done(null, false);
      }

      // if user is found, check if the password is correct

      // if password invalid, handle it

      // otherwise, return the user
    }
  )
);
