var db = require('../utils/db.tables');
var getUser = db.logIn;
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

const getUsers = async (req, res)=>{
    try{
        var userData = await getUser.findAll({
            where:{
                id: req.params.id
            }
        })
    jwt.sign({userData},secretKey,{expiresIn:"400s"},(err, token)=>{
    res.json({token})
    });

    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {getUsers}