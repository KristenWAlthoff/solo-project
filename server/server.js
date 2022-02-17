const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const books_controller = require('./controllers/books_controller');
const cors = require('cors');

//allows us to recognize incoming request as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//app.use(express.static(path.resolve(__dirname, '../client')))

app.get('/books', books_controller.getTitles, (req, res) =>{
    res.send(res.locals.books);
})

app.get('/authors', books_controller.getAuthors, (req, res) => {
    res.send(res.locals.authors)
})

//when a user clicks on a book, it renders a new page
//that page has all of the info for that book (get its id from request; GET info about that book, send back to page)

//global error handler
app.use((err, req, res, next) => {x
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occured'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.stats).json(errorObj.message);
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
module.exports = app