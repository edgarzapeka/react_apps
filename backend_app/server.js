const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/todo');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
    console.log('connection successfully open');
});

const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //Set to application/json in order to make our api restFUL
    //res.setHeader('Content-Type', 'application/json');
    // Pass to next layer of middleware
    next();
});

app.use('/todo', require('./controllers/TodoController'));
app.use('/book', require('./controllers/BookController'));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`))