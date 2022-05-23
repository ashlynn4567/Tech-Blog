const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// GET /api/users (all)
router.get("/", (req, res) => {

});

// GET /api/users/1 (one user)
router.get("/:id", (req, res) => {

});

// POST /api/users
router.post("/", (req, res) => {

});

// POST /login
router.post("/login", (req, res) => {

});

// PUT /api/users/1
router.put("/:id", (req, res) => {

});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {

});

module.exports = router;