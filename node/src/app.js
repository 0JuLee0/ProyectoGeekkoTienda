const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const path = require('path');

// settings

app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./Routes/users'))
app.use('/api/products',require('./Routes/products'))

// public files
app.use(express.static(path.join(__dirname, '../public/')));



module.exports = app;