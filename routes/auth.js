// const express = require('express');
const router = require('express-promise-router')(); // with this module, no need to write try/catch snippets
const passport = require('passport');
require('../services/passport'); // config passport

const { validateBody, schemas } = require('../helpers/routeHelpers'); // validateBody is middleware that validates user input using the authSchema we had defined in our routeHelpers.js, before navigating to the AuthController
const AuthController = require('../controllers/auth');

// User sign up with email + password
router
  .route('/signup')
  .post(validateBody(schemas.authSchema), AuthController.signUp);

// User login with email + password
router
  .route('/signin')
  .post(
    validateBody(schemas.authSchema),
    passport.authenticate('local', { session: false }),
    AuthController.signIn
  );

// User authenticated with Google OAuth
router
  .route('/google')
  .post(
    passport.authenticate('googleToken', { session: false }),
    AuthController.signIn
  );

// User authenticated with Facebook
router
  .route('/facebook')
  .post(
    passport.authenticate('facebookToken', { session: false }),
    AuthController.signIn
  );

// Authenticated user can access test secret page
router
  .route('/secret')
  .get(passport.authenticate('jwt', { session: false }), AuthController.secret);

module.exports = router;
