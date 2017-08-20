const passport = require('passport');

const passportAuthGoogle = passport.authenticate('google', {scope:['profile','email']});

module.exports = (app) => {
    // route that user hits, which triggers passport to SEND request to Google
    app.get('/auth/google', passportAuthGoogle);

    // route that Google calls back to (with a code), which triggers passport to query Google
    // again (with the code) in order to get user information
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
      })

}



