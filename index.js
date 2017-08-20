const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');                        // 1
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')

require('./models/User');
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

app.listen(process.env.PORT || 5000, function() {
    console.log('listening on port 5000');
});


// 1 -  cookie-session puts the entire session into the cookie (4k)
//      express-session puts a session_id into the cookie, then
//      looks session up from a session store (session can have unlimited size)