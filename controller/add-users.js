var db = require('../utils/db.tables');
const bcrypt = require('bcryptjs');                                    

var loginDb = db.logIn;

const createUsers = async (req, res)=>{
    try{
        console.log(req.body);
        const {name, email, password} = req.body;

            // making validations
        const userExists = await loginDb.findOne({
            where: {email}
        });
        if(userExists){
            return res.status(400).send('Email already Exists');
        }

        await loginDb.create({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 5),
        });
        return res.status(200).send('Successfully Registered');
    }catch(error){
        console.log(error.stack);
    }
}

module.exports = {createUsers}