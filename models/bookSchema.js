const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: {type: String},
    title: {type: String, required: true},
    authors: { type: [String], required: true},
    description: {type: String, required: true},
    Image: {type: String, required: true},
    link: {type: String, required: true}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book; 