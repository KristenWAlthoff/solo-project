const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//allows us to recognize incoming request as json
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client')));

//global error handler
app.use((err, req, res, next) => {
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