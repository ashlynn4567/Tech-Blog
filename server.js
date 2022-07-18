// import dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
// set up connection to database
const sequelize = require("./config/connection");
// set up session cookies
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// instantiate application and set up flexible port
const app = express();
const PORT = process.env.PORT || 3001;

// set up handlebars template
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

// more middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// configure session and connect to our sequelize db
const sess = {
    secret: "secretidhere",
    // use cookies
    cookie: {},
    resave: true,
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

// middleware between req and res
// call configured database through express session
app.use(session(sess));
// after middleware, direct app to response routes in controllers
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`));
});