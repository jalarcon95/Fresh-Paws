const db = require('../config/connection');
const { User, Pet, Appointment } = require('../models');

db.once('open', async () => {
    // clean database
    await Appointment.deleteMany();

    // bulk create each model
    const appointments = await Appointment.insertMany([
        { date: 'October 12th', time: '11:00 AM' },
        { date: 'October 17th', time: '9:00 AM' },
        { date: 'October 28th', time: '2:00 PM' },
        { date: 'October 31st', time: '1:00 PM' }
    ]);

    console.log('appointments seeded');

    // clean database
    await Pet.deleteMany({});

    // bulk create each model
    const pets = await Pet.insertMany([
        {
            name: "Barnie",
            species: "Cat",
            vaccine: "true",
            description: "A very large and in charge tabby cat.",
            appointment: appointments[0]
        },
        {
            name: "Orangie",
            species: "Cat",
            vaccine: "false",
            description: "Looks just like an orangsickle.",
            appointment: appointments[2]
        },
        {
            name: "Lightning",
            species: "Dog",
            vaccine: "true",
            description: "Well behaved and trained boston terrier.",
            appointment: [appointments[1], appointments[3]]
        }
    ]);

    console.log('pets seeded');

    // clean database
    await User.deleteMany({});

    // bulk create each model
    const users = await User.insertMany([
        {
            username: "campbell1",
            email: "ccampbell@gmail.com",
            password: "password1",
            pets: [pets[0], pets[1]]
        },
        {
            username: "esmith65",
            email: "eric.smith@gmail.com",
            password: "password2",
            pets: pets[2]
        }
    ]);

    console.log('users seeded!');

    console.log('All seeded!');
    process.exit();

});