// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/API.js')

// SET-UP EXPRESS APP
const APP = express();
const PORT = process.env.PORT || 3001;

// SET-UP DATA PARSING (MIDDLEWARE)
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
// SET-UP STATIC ASSETS
if (process.env.NODE_ENV === 'production') {
    APP.use(express.static('client/build'));
}

// ROUTES
APP.use(routes);

// CONNECT TO DATABASE
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// START SERVER LISTENING
APP.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`)
});