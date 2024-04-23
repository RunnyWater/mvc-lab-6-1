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
}

module.exports = User;
