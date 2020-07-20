const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    author: String
});

module.exports = mongoose.model('Book', BookSchema);