var db = require('../utils/db.tables');
var logIn = db.logIn;

const createUsers = async (req, res)=>{
    try{
        console.log(req.body);
        const {name, email, password} = req.body;

        await logIn.create({
            name: name,
            email: email,
            password: password
        }).then((result)=>{
            res.status(200).send(result);
        });
    }catch(error){
        console.log(error.stack);
    }
}

module.exports = {createUsers}