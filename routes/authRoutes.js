const passport = require('passport');

// what is happening in this arrow function
// how does it communicate with index.js invocation
module.exports = app => {
app.get(
  '/auth/google',
  passport.authenticate('google', {
  scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });


};
