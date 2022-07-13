// imports 
const { Comment } = require("../models");
const faker = require("faker");

const commentData = [];

for (let i = 0; i < 20; i++) {
    // create a randomly generated paragraph 10 sentences or less
    const comment_text = faker.paragraph(Math.floor(Math.random() * 11));
    // pick one of the 10 randomly generated users
    const user_id = Math.floor(Math.random() * 11);
    // pick one of the 20 randomly generated posts
    const post_id = Math.floor(Math.random() * 21);

    commentData.push({ comment_text, user_id, post_id });
};

// function that seeds comment data
const seedComments = () => Comment.bulkCreate(commentData);

// exports 
module.exports = seedComments;