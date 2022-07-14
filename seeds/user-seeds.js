// imports
const { User } = require("../models");
const faker = require("faker");

const userData = [];

for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
};

// function that seeds user data
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

// exports 
module.exports = seedUsers;