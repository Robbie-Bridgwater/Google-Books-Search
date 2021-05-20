const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Set-up parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/google_book_search", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Start the API server
app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}!`)
);