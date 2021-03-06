// imports
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// get all posts for a homepage
router.get("/", (req, res) => {
    console.log("=====================");
    Post.findAll({
        attributes: [
            "id", 
            "title", 
            "body",
            "created_at"
        ], 
        include: [
            {
                model: Comment, 
                attributes: [
                    "id", 
                    "comment_text", 
                    "user_id", 
                    "post_id", 
                    "created_at",
                ], 
                include: {
                    model: User,
                    attributes: ["username"],
                }, 
            }, 
            {
                model: User, 
                attributes: ["username"],
            }
        ]
    })
    .then(dbPostData => {
        // loop over each seqeulize object, saving the results to a new posts array
        const posts = dbPostData.map(post => post.get({ plain: true }));

        // pass a single post object into the homepage template
        res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIn,
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// get one post for a homepage
router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: [
            "id", 
            "title", 
            "body",
            "created_at", 
        ],
        include: [
            {
                model: Comment, 
                attributes: [
                    "id", 
                    "comment_text", 
                    "user_id", 
                    "post_id",
                    "created_at",
                ], 
                include: {
                    model: User, 
                    attributes: ["username"],
                },
            },
            {
                model: User, 
                attributes: ["username"]
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "No post found with this id!" });
            return;
        };

        // serialize the data
        const post = dbPostData.get({ plain: true });

        // pass data to template
        res.render("single-post", {
            post, 
            loggedIn: req.session.loggedIn,
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// login 
router.get("/login", (req, res) => {
    // if logged in, redirect to homepage
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    };
    res.render("login");
});

// exports
module.exports = router;