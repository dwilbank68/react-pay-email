const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');                        // 1
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60  * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // when a route is received requesting specific files,
    // serve up production assets (main.js, main.css)
    app.use(express.static('client/build'));

    // when a route is received that is not defined in express,
    // (for the front-end) serve up index.html file
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log('listening on port 5000');
});


// 1 -  cookie-session puts the entire session into the cookie (4k)
//      express-session puts a session_id into the cookie, then
//      looks session up from a session store (session can have unlimited size)