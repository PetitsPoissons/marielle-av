const JWT = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

signToken = (user) => {
  const token = JWT.sign(
    {
      iss: 'auth-project', // optional
      sub: user._id, // required
      iat: new Date().getTime(), // optional: exact time the token was issued (returns the current time)
      exp: new Date().setDate(new Date().getDate() + 1), // optional: set expiration date (returns the current time + 1 day ahead)
    },
    keys.jwtSecret
  );
  return token;
};

module.exports = {
  signUp: async (req, res, next) => {
    // collect validated email and password
    const { email, password } = req.value.body;

    // check if a user with that email already exists in the database
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(403).send({ error: 'Email is already in use' });
    }

    // create a new user
    const newUser = new User({
      email: email,
      password: password,
    });
    await newUser.save();

    // respond with a token
    const token = signToken(newUser);
    res.status(200).json({ token: token });
  },

  signIn: async (req, res, next) => {
    // we need to generate a token
    console.log('AuthController.signIn() called');
  },

  secret: async (req, res, next) => {
    console.log('AuthController.secret() called');
  },
};
