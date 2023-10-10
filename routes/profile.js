const express = require('express');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';
const router = express.Router();

router.post('/login');

router.post('/profile',verifyToken, (req, res)=>{
    jwt.verify(req.token, secretKey,(err, authorizedData)=>{
        if(err){
            res.send({result: 'Invalid Token'});
        }else{
            res.json({message: "You are valid to access the profile", authorizedData});
        }
    })
});

function verifyToken(req, res, next){
    const authHeader = req.headers['authorization']
    if(typeof authHeader !== 'undefined'){
        // const splitHeader = authHeader.split(" ");
        const token = authHeader;
        req.token = token;
        next();
    }else{
        res.send({result: "Invalid Token"});
    }
}

module.exports = router;