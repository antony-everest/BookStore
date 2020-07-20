module.exports = (app) => {
    const books = require('../controllers/bookController.js');

    // add books
    app.post('/books', books.addBook);

    // return all books
    app.get('/books', books.getAllBooks);

    // searching a book with its name
    app.get('/books/:bookName', books.searchByName);
}