const router = require('express').Router();
const {Assignment} = require('../db');

//// add routes here ////

//== GET all caretakers: /api/caretakers
router.get('/', async (req, res, next) => {
    try {
        res.send(await Assignment.findAll())
    } catch(err) {
        next(err)
    }
})

module.exports = router;