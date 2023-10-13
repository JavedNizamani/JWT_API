const express = require('express');
const router = express.Router();
const {createUsers} = require('../controller/add-users');

router.post('/add-users',createUsers);

module.exports = router;