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

// // == single task
// router.get('/:id', async (req, res, next) => {
//     try {
//         const task = await Task.findOne({
//             where: {id: req.params.id},
//             include:
//             Caretaker
//         });
//         res.send(task);
//     } catch(error) {
//         next(error)
//     }
// })


module.exports = router;