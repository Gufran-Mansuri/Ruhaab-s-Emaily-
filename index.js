const express = require('express');
require('./modals/user');  
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');


const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);


const app = express();
app.use(
    cookieSession({
        maxAge: 10 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app)



const PORT  = process.env.PORT || 5000;
app.listen(PORT);
