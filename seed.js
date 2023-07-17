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