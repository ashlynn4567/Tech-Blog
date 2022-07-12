// imports 
const sequelize = require("sequelize");
const { Model, DataTypes } = require("../config/connection");

// create Post model
class Post extends Model { };

// define table columns and configuration
Post.init(
    // table column definitions
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING(3000),
            allowNull: false, 
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user", 
                key: "id",
            },
        }
    },
    // table config options 
    {
        sequelize, 
        freezeTableName: true,
        underscored: true, 
        modelName: "post",
    },
);

// exports
module.exports = Post;