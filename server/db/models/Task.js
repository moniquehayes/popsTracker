const Sequelize = require('sequelize');
const db = require('../database');

// MODULE CREATED // 

module.exports = db.define('task', {
    // add all labels
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    mealtype: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false, 
        defaultValue: Sequelize.fn('NOW')
    },
    description: {
        type: Sequelize.TEXT
    }
})