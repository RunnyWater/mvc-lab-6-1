const Book = require('../models/Book');

exports.getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();
    res.render('books', { title: 'Books', userId, books });
};
