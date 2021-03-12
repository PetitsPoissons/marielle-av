const express = require('express');
const router = require('express-promise-router')();

const AuthController = require('../controllers/auth');

router.route('/signup').post(AuthController.signUp);

router.route('/signin').post(AuthController.signIn);

router.route('/secret').get(AuthController.secret);

module.exports = router;
