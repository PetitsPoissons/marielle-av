// const express = require('express');
const router = require('express-promise-router')(); // with this module, no need to write try/catch snippets
const passport = require('passport');
const passportConf = require('../services/passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const AuthController = require('../controllers/auth');

router
  .route('/signup')
  .post(validateBody(schemas.authSchema), AuthController.signUp);

router.route('/signin').post(AuthController.signIn);

router
  .route('/secret')
  .get(passport.authenticate('jwt', { session: false }), AuthController.secret);

module.exports = router;
