const { db, Caretaker, Task } = require('./server/db');

const seed = async () => {
    try {
        await db.sync({force: true})
        //data to seed

        const caretakers = [];
        const julie = await Caretaker.create({
            name: 'Julie',
            day: 'Tuesday'
        });
        const michael = await Caretaker.create({
            name: 'Michael', 
            day: 'Thursday'
        })
        const yvette = await Caretaker.create({
            name: 'Yvette', 
            day: 'Monday'
        })
        const adele = await Caretaker.create({
            name: 'Adele', 
            day: 'Wednesday'
        })
        const adrienne = await Caretaker.create({
            name: 'Adrienne'
        })
        const karen = await Caretaker.create({
            name: 'Karen'
        })
        caretakers.push(julie, michael, yvette, adele, adrienne, karen);

        //NOW MAKE RANDOM TASKS
        const types = ["shower", "meal", "exercise"];
        const dates = ['8/1', '8/2', '8/3', '8/4', '8/5', '8/7', '8/8']
        const times = ['8:00', '9:15', '11:30', '12:00', '5:00', '6:30']
        const mealtypes = ["breakfast", "lunch", "dinner"];
        // make 20 tasks, make sure to add date to each. description can be lorem. will have to set caretaker for random
        for (let i=1; i<21; i++) {
            const randomTask = Math.floor((Math.random()) * 3);
            const randomDate = Math.floor((Math.random()) * 7);
            const randomTime = Math.floor((Math.random()) * 6);
            const randomTaskName = types[randomTask];
            const randomDateInfo = dates[randomDate];
            const randomeTimeInfo = times[randomTime]
            const meal = randomTaskName === 'meal' ? mealtypes[randomTask] : null;
            const randomCaretaker = Math.floor((Math.random()) * 6);
            const task = await Task.create({
                type: randomTaskName,
                mealtype: meal, 
                date: randomDateInfo,
                time: randomeTimeInfo,
                description: 'Congue quisque egestas diam in arcu cursus. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Viverra justo nec ultrices dui sapien eget mi proin. Augue lacus viverra vitae congue eu consequat ac. Pellentesque habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat sed lectus vestibulum mattis. Bibendum arcu vitae elementum curabitur vitae. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Aliquam etiam erat velit scelerisque in dictum'
            })
            task.setCaretaker(caretakers[randomCaretaker]);
        }

    } catch(err) {
        console.error(err)
    }
};

const runSeed = async () => {
    try {
        await seed();
        console.log('Seeding success!');
    } catch (err) {
        console.error(err)
    }
};

if (require.main === module) {
    runSeed();
}