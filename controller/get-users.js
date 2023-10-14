const bcrypt = require('bcryptjs');
var db = require('../utils/db.tables');
var getUser = db.logIn;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const getUsers = async (req, res)=>{
    try{
        const {email, password} = req.body;

        // Verify Email
        const user = await getUser.findOne({
            where: {email}
        });
        if(!user){
            res.status(404).send('Email not Found')
        }
            // Verify Password 
        const passValidate = await bcrypt.compare(password, user.password);

        if(!passValidate){
            return res.status(404).send('Incorrect Password');
        }
    const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:process.env.JWT_REFRESH_EXPIRATION});

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        });

    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {getUsers}