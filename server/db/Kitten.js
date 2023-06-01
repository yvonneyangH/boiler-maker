const db = require('./db');
const Sequelize = require('sequelize');

const Kitten = db.define('kitten',{
    name:{
        type:Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
})

module.exports = Kitten;