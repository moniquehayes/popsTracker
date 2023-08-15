const Sequelize = require('sequelize');
const db = require('../database');

// MODULE CREATED // 

module.exports = db.define('assignment', {
    startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})