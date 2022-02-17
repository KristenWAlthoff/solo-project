const { ContextExclusionPlugin } = require('webpack');
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

books_controller.addBook = (req, res, next) => {
    const query = `INSERT INTO books (title) VALUES ($1) RETURNING books.title`
    const title = [req.body.title]
    db.query(query, title)
        .then((result) => {
            res.locals.newTitle = result.rows[0].title
            return next()
        })
        .catch((err) =>{
            return next({
                log: `cannot get authors. ERROR: ${err}`,
                message: {err: 'Error occurred in books_controller.addBook'}
            });
        });
}

// books_controller.addAuthor = (req, res, next) => {
//     const query = `INSERT INTO authors (name) VALUES ($1) RETURNING authors._id`
//     //BE SURE TO SAVE THE AUTHOR"S NAME IN BODY AS KEY AUTHOR
//     console.log('body', req.body)
//     const authName = [req.body.author];
//     console.log(authName);
//     db.query(query, authName)
//         .then((result) => {
//             console.log(result.rows)
//             res.locals.authorID = result.rows
//             return next();
//         })
//         .catch((err) =>{
//             return next({
//                 log: `cannot get authors. ERROR: ${err}`,
//                 message: {err: 'Error occurred in books_controller.addAuthor'}
//             });
//         });
// }

module.exports = books_controller;