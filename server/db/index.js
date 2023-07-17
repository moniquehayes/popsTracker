const db = require('./database');
const Sequelize = require('sequelize');
const Caretaker = require('./models/Caretaker.js');
const Task = require('./models/Task.js');

// ASSOCIATIONS //

Caretaker.hasMany(Task);
Task.belongsTo(Caretaker);

// EXPORT DB //
module.exports = {
    db, 
    Caretaker,
    Task
}