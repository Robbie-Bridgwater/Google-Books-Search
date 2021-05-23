const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/API.js')

const APP = express();
const PORT = process.env.PORT || 3000;


// SET-UP DATA PARSING (MIDDLEWARE)
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
// SET-UP STATIC ASSETTS
if (process.env.NODE_ENV === 'production') {
    APP.use(express.static('client/build'));
}

// ROUTES
APP.use(routes);

// CONNECT TO DATABASE
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// START SERVER LISTENING
APP.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`)
});