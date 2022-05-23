const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all users posts
router.get("/", (req, res) => {

});

// GET /1 one user's posts
