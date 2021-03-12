const passport = require('passport');

module.exports = (app) => {
  // pass user off to passport when they hit that endpoint so they are getting passed on to the authentication flow
  app.post(
    '/api/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  // route that returns whoever is logged into our app
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // route to logout a user
  app.get('/api/logout', (req, res) => {
    req.logout(); // takes cookie that contains the user's id and kills it
    res.send(req.user); // that should return undefined
  });
};
