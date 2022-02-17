const db = require('../models/book_models');

const books_controller = {};

books_controller.getTitles = (req, res, next) => {
    console.log('here!')
    const query = `SELECT title FROM books`
    db.query(query)
        .then((result) =>{
            res.locals.books = [];
            result.rows.forEach((book) => res.locals.books.push(book.title));
            return next()
        })
        .catch((err) =>{
            return next({
                log: `cannot get books. ERROR: ${err}`,
                message: {err: 'Error occurred in books_controller.getTitles'}
            });
        });
};

books_controller.getAuthors = (req, res, next) => {
    const query = `SELECT b.*, a.name
    FROM books b LEFT OUTER JOIN authors a
    ON b.author_id = a._id`
    db.query(query)
        .then((result) => {
            res.locals.authors = []
            result.rows.forEach((book) => res.locals.authors.push(book.name));
            return next()
        })
        .catch((err) =>{
            return next({
                log: `cannot get authors. ERROR: ${err}`,
                message: {err: 'Error occurred in books_controller.getAuthors'}
            });
        });
}

module.exports = books_controller;