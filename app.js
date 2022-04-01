const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
const path = require('path');
require('dotenv').config();
require('./helpers/init_mongodb')  //mongoDB connection handler
// const { verifyAccessToken } = require('./helpers/jwt_helper')
//initialize app
const app = express();



// Routes 
const course = require('./routes/course');











//env variables
const PORT = process.env.PORT || 8887;


//Use in initialization
app.use(express.static('./dist/minimal-ICTAK'));
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});



//Use route

app.use('/api/course', course);














//-------------HTTP Error Handling -------//

app.use(async (req, res, next) => {
    next(createError.NotFound('This route does not exist!!'));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/minimal-ICTAK/index.html'));
});
//-------------PORT Listening -------//

app.listen(PORT, () => {
    console.log(`.....SERVER started at ${PORT}`)
});