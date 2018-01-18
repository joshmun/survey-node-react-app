const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

// this doesn't make sense to me
// is it passing app object into the function? how does it give app as a parameter
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
