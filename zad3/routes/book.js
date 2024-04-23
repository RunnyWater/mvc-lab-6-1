const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

router.get('/', bookController.getBooksList);
router.get('/books/:id', bookController.getBookDetails);
router.post('/books/borrow/:id', bookController.postBookBorrow);
router.post('/books/return/:id', bookController.postBookReturn);
router.get('/books/borrow/success', bookController.getBookBorrowSuccess);
router.get('/books/return/success', bookController.getBookReturnSuccess);

module.exports = router;
