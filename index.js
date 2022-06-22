const express = require('express');
require('./modals/user');  
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');


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

app.use(bodyParser.json());

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

if(process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js and main.css
    app.use(express.static("client/build"));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const PORT  = process.env.PORT || 5000;
app.listen(PORT);
