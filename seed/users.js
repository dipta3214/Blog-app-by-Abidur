const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const users = [
        {
            author: 'Abidur'
        }
    ];

    await User.insertMany(users)
    console.log('Created User')
};

const run = async () => {
    await main()
    db.close()
};

run()