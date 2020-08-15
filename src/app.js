const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/test';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// middleware
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

// DB接続
const connectDatabase = () => {
    mongoose.connect(DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with host: ${con.connection.host}`);
    })
};

connectDatabase();

app.listen(3000);