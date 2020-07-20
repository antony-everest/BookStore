const Book = require('../models/bookModel.js');

exports.saveBooks = async (book) => {
    return await book.save();
}

exports.getAllBooks = async () => {
    return await Book.find();
}

exports.getBookByName = async (bookName) => {
    return await Book.find({ name: new RegExp('^' + bookName + '$', "i") })
}