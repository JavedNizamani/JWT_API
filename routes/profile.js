const express = require('express');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';
const router = express.Router();
const jwtDataToken = require('../controller/profile');

router.get('/profile',jwtDataToken.verifyToken,jwtDataToken.jwtData);

module.exports = router;