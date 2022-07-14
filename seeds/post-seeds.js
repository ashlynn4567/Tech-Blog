// imports 
const { Post } = require("../models");
const faker = require("faker");

const postData = [];

for (let i = 0; i < 20; i++) {
    // creates a random title 10 words or less
    const title = faker.lorem.words(Math.floor(Math.random() * 10) + 1);
    // create a randomly generated paragraph 300 words or less
    const body = faker.lorem.words(Math.floor(Math.random() * 300) + 1);
    // pick one of the 10 randomly generated users
    const user_id = Math.floor(Math.random() * 10) + 1;

    postData.push({ title, body, user_id });
};

// function that seeds post data
const seedPosts = () => Post.bulkCreate(postData);

// exports 
module.exports = seedPosts;