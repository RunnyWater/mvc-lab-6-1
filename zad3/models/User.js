class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return [
            new User(1, 'user1'),
            new User(2, 'user2'),
            new User(3, 'user3'),
            new User(4, 'user4'),
            new User(5, 'user5'),
        ];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(bookId) {
        this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== bookId);
    }

    findBorrowedBookById(bookId) {
        return this.borrowedBooks.some(book => book.id === bookId);
    }
}

module.exports = User;
