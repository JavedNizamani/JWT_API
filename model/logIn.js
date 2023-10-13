module.exports = (sequelize, Sequelize)=>{

    const logIn = sequelize.define('logIn',{
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

    }, {
        tableName: 'logIn',
        timestamps: false
    });
        return logIn;
}