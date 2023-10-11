const sequelize = require('./db');
const {Sequelize} = require('sequelize');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.logIn = require('../model/logIn')(sequelize, Sequelize)
db.sequelize.sync();

module.exports = db;