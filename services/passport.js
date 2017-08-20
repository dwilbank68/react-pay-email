const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

// recreates user obj from the cookie and
// adds it as req.user
passport.deserializeUser((userId, done) => {
    User
        .findById(userId)
        .then(user => done(null, user))
})

const googStrategyObj = {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
};

const OAuthCallback = async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});
    if (existingUser) return done(null, existingUser);

    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
    // when done is called, user obj is sent to serializeUser
}

const googleStrategy = new GoogleStrategy(googStrategyObj, OAuthCallback);
// accessed below as 'google'

passport.use(googleStrategy);