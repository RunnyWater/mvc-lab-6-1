const User = require('../models/User');
const Book = require('../models/Book');

const getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();
    res.render('books', { title: 'Books', userId, books });
};


const getBookDetails = (req, res) => {
    console.log('getBookDetails called with ID:', req.params.id);
    const userId = req.session.userId;
    console.log(userId)
    const bookId = req.params.id;
    console.log(bookId)

    const user = User.getAll().find(user => user.id == userId);
    const book = Book.getAll().find(book => book.id == bookId);
    console.log('All users:', User.getAll()[0].id);
    console.log('All books:', Book.getAll()[0].id);
    if (!user || !book) {
        return res.status(404).render('not-found', { title: 'Not Found' });
    }

    const didUserBorrowTheBook = user.findBorrowedBookById(bookId);
    res.render('book-details', { title: `Details for ${book.title}`, book, didUserBorrowTheBook });
};


const postBookBorrow = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const user = User.getAll().find(user => user.id === userId);
    const book = Book.getAll().find(book => book.id === bookId);
    
    if (!user || !book || !book.available) {
        return res.status(400).render('error', { title: 'Error', message: 'Book is not available for borrowing.' });
    }

    book.borrow();
    user.borrowBook(book);
    res.redirect('/books/borrow/success');
};


const postBookReturn = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const user = User.getAll().find(user => user.id === userId);
    const book = Book.getAll().find(book => book.id === bookId);

    if (!user || !book || book.available) {
        return res.status(400).render('error', { title: 'Error', message: 'Book is not borrowed by you.' });
    }

    book.return();
    user.returnBook(bookId);
    res.redirect('/books/return/success');
};


const getBookBorrowSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book borrowed successfully.' });
};

const getBookReturnSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book returned successfully.' });
};


module.exports = {
    getBooksList,
    getBookDetails,
    postBookBorrow,
    postBookReturn,
    getBookBorrowSuccess,
    getBookReturnSuccess
};