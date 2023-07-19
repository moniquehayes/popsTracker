const router = require('express').Router();
const {Caretaker, Task} = require('../db');

//// add routes here ////

//== all tasks api/tasks
router.get('/', async (req, res, next) => {
    try {
        res.send(await Task.findAll())
        console.log('here')
    } catch(err) {
        next(err)
    }
})


module.exports = router;