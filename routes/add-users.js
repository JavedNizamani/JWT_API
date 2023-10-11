const express = require('express');
const router = express.Router();
const logIn = require('../controller/add-users');

router.post('/add-users',logIn.createUsers);

module.exports = router;