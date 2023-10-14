const express = require('express');
const router = express.Router();
const getUser = require('../controller/get-users');

router.post('/login',getUser.getUsers);

module.exports = router;