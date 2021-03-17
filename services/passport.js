const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
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

// GOOGLE OAUTH STRATEGY
passport.use(
  'googleToken',
  new GooglePlusTokenStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // check if the user exists in our db
        const user = await User.findOne({ 'google.id': profile.id });
        if (user) {
          return done(null, user);
        }
        // if this is a new user, create a new user record in our db
        const newUser = new User({
          method: 'google',
          google: {
            id: profile.id,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          },
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);

// FACEBOOK STRATEGY
passport.use(
  'facebookToken',
  new FacebookTokenStrategy(
    {
      clientID: keys.facebookAppId,
      clientSecret: keys.facebookAppSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // check if the user exists in our db
        const user = await User.findOne({ 'facebook.id': profile.id });
        if (user) {
          return done(null, user);
        }
        // if this is a new user, create a new user record in our db
        const newUser = new User({
          method: 'facebook',
          facebook: {
            id: profile.id,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          },
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);

// LOCAL STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // we choose to let the user login with email/password
    },
    async (email, password, done) => {
      try {
        // find the user given the email
        const user = await User.findOne({ 'local.email': email });

        // if no user found, handle it
        if (!user) {
          return done(null, false);
        }

        // if user is found, check if the password is correct
        const pwMatch = await user.isValidPassword(password);

        // if password invalid, handle it
        if (!pwMatch) {
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
