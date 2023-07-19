const router = require('express').Router();
const {Caretaker, Task} = require('../db');

//// add routes here ////

//== GET all caretakers: /api/caretakers
router.get('/', async (req, res, next) => {
    try {
        res.send(await Caretaker.findAll())
    } catch(err) {
        next(err)
    }
})

module.exports = router;