const Sequelize = require('sequelize');
const db = require('../database');

// MODULE CREATED // 

module.exports = db.define('caretaker', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    day: {
        type: Sequelize.STRING,
    }
})