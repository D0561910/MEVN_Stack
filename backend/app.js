const express = require('express');
const database = require('./database');
cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connected");
}, error => {
    console.log("Database could't be connect to: " + error);
})

const postAPI = require("./routes/post.route");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// API
app.use('/api', postAPI);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Connected to port: " + port);
});

// Error Handle
app.use(function (err, req, res, next) {
    console.log(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
