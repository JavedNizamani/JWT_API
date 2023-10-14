const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

var jwtData = (req, res)=>{
    jwt.verify(req.token, process.env.JWT_SECRET,(err, authorizedData)=>{
        if(err){
            res.send({result: 'Invalid Token'});
        }else{
            res.json({message: "You are valid to access the profile", authorizedData});
        }
    })
}

function verifyToken(req, res, next){
    const authHeader = req.headers['authorization']
    if(typeof authHeader !== 'undefined'){
        const token = authHeader;
        req.token = token;
        next();
    }else{
        res.send({result: "Invalid Token"});
    }
}
module.exports = {
    verifyToken,
    jwtData
}


