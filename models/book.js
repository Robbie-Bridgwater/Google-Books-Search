const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book_schema = new Schema({
    googleId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: [String], required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

const Book = mongoose.model("Book", book_schema);

module.exports = Book;