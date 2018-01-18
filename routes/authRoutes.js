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

};
