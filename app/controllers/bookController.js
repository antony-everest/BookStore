const Book = require('../models/bookModel.js');
const bookService = require('../services/bookSevice')

// this is to add books in DB
exports.addBook = (req, res) => {
    if (!req.body.name && !req.body.author) {
        return res.status(400).send({
            message: "Book name or author should be empty"
        });
    }

    const book = new Book({
        name: req.body.name,
        author: req.body.author
    });

    // saving in the DB
    try {
        bookService.saveBooks(book)
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "error occurred while adding books."
        });
    }
};

// getting all books from the DB.
exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.send(books);
    } catch (err) {
        res.status(500).send({
            message: err.message || "error occurred while retrieving books."
        });
    };
};

// search book by name
exports.searchByName = async (req, res) => {
    try {
        const books = await bookService.getBookByName(req.params.bookName);
        if (books.length == 0) {
            return res.status(404).send({
                message: "book not found with name " + req.params.bookName
            });
        }
        res.send(books);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error finding book with name " + req.params.bookName
        });
    };
};