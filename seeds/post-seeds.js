// imports 
const { Post } = require("../models");
const faker = require("faker");

const postData = [];

for (let i = 0; i < 20; i++) {
    // creates a 1 line title
    const title = faker.lines(1);
    // create a randomly generated paragraph 20 sentences or less
    const body = faker.paragraph(Math.floor(Math.random() * 21));
    // pick one of the 10 randomly generated users
    const user_id = Math.floor(Math.random() * 11);

    postData.push({ title, body, user_id });
};

// function that seeds post data
const seedPosts = () => Post.bulkCreate(postData);

// exports 
module.exports = seedPosts;