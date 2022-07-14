// import dependencies
const Sequelize = require("sequelize");
require("dotenv").config();

// create variable to setup connection to the database using sequelize
const sequelize = process.env.JAWSDB_URL
    // ternary operator. if no sequelize connection to online database, use localhost
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql", 
        port: 3306
    });

// exports
module.exports = sequelize;