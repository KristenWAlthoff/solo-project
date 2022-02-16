const db = require('../models/book_models');

const books_controller = {};

books_controller.getTitles = (req, res, next) => {
    console.log('here!')
    const query = `SELECT title FROM books`
    db.query(query)
        .then((result) =>{
            console.log(result.rows);
            res.locals.books = result.rows;
            return next()
        })
        .catch((err) =>{
            return next({
                log: `cannot get books. ERROR: ${err}`,
                message: {err: 'Error occurred in books_controller.getTitles'}
            });
        });
};

module.exports = books_controller;