const express = require('express');
const app = express();                                              // getting express framework 
const bodyParser = require('body-parser');

const adminLoginRoutes = require('./routes/login');
const adminProfileRoutes = require('./routes/profile');

app.use(bodyParser.json());
app.use('/admin',adminLoginRoutes);
app.use('/admin',adminProfileRoutes);

module.exports = app;

