const db = require('./db');
const Sequelize = require('sequelize');

const Puppy = db.define('puppie',{
    name:{
        type:Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
})

module.exports = Puppy;