// imports 
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

// direct webpage to the appropriate resource
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

// set a route for if the user enters an invalid route
router.use((req, res) => {
    res.status(404).end();
});

// exports
module.exports = router;