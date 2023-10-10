const express = require('express');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';
const router = express.Router();
// const addUsers = require('../controller/addUsers');

router.post('/login', (req, res)=>{
    const userData = {
        id: 1,
        name: "Asif",
        email: "asif@gmail.com"
    }
    jwt.sign({userData},secretKey,{expiresIn:"400s"},(err, token)=>{
        res.json({token});
    });
});

module.exports = router;