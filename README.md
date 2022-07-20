# Tech-Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table-of-Contents

- [Description](#description)
- [Deployed Site](#deployed-site)
- [Features](#features)
- [Technologies](#technologies)
- [Future Development](#future-development)
- [Credits](#credits)

## Description

This is my fourteenth challenge assignment for the University of Oregon Coding Bootcamp 2022. In this challenge, I use Sequelize, Express.js, and Handlebars.js to build a fullstack application that follows the MVC Paradigm. Users can create posts, edit posts, and comment on other's posts in this wordpress-type website.

## Deployed Site

Follow [this link](https://secret-lowlands-95047.herokuapp.com/) to view and use our site!

## Features

This is how the front-end webpage appears to new viewers. It is responsive, adapting to multiple screen sizes. The links in the navigation bar show buttons for "home," a page that shows the most recent posts by users on the site, and "login," where users can go to either login with their existing credentials or sign up as a new user. The posts on the homepage show details such as the title, date created, and post author.

<p align="center">
<img alt="A screenshot of the homepage of Tech Blog. A list of posts are shown in the main portion of the screen. There are also links in the navigation bar show buttons for 'home,' a page that shows the most recent posts by users on the site, and 'login,' where users can go to either login with their existing credentials or sign up as a new user." src="./assets/images/tech-blog-screenshot.jpg"/>
</p>

To login or sign up, users must click the "login" button in the navigation bar. This brings them to a page where they can either enter their existing username and password to log in, or they can enter their username, email, and password to sign up for the site. Once they complete either the login or signup form, the user is brought to their dashboard. Signed-in users can see new buttons in the navbar - one for their dashboard, and one to logout.

<p align="center">
<img alt="A demonstration gif showing a user signing up for the site. They are redirected to the user dashboard." src="./assets/images/tech-blog-demo.gif"/>
</p>

On the user's dashboard, they can view posts that they have created. There is also a form in which users can enter a title and text body to create a new blog post. After they submit hte form, the page redirects to show an updated dashboard displaying their new blog post.

<p align="center">
<img alt="A demonstration gif showing the user creating a new post and viewing it on their dashboard." src="./assets/images/tech-blog-demo-[insert later].gif"/> 
</p>

when clicking on existing post from dashboard, user can update or delete blog post. users can click on the logout option to be signed out of the site.

<p align="center">
<img alt="[insert later]" src="./assets/images/tech-blog-demo-[insert later].gif"/> 
</p>

from homepage: when clicking on a blog post, presented with title, contents, post creator's username, and date created for post. Also shows option to leave a comment. logged in users can create a comment and post. redirected to an updated page that displays the comment, date created, and creator's username.

<p align="center">
<img alt="[insert later]" src="./assets/images/tech-blog-demo-[insert later].gif"/> 
</p>

## Technologies

- [Handlebars.js](https://handlebarsjs.com/)
- CSS
- JavaScript
- Node.js
- npm
- [Express.js](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize.js](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/express-session-sequelize)
- [faker.js](https://fakerjs.dev/)

## Future Development

In the future, I would like to add the following improvements:

- I would like to restyle this site to feature a cleaner and more readable user interface.
- This application is missing a "profile page" feature. Future users could click on a username to be brought to a profile page that features that user's posts and comments.
- I would also like to add functionality where users can add friends.
- A search function for this site is missing. Users should be able to search for posts with a freeform search, such as by keyword or username. A filtration system could work as well if users wanted to search for posts in the last 24 hours.

I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach our development team at the links below.

- <a href="mailto:ashlynn4567@gmail.com">Email</a>
- <a href="https://github.com/ashlynn4567">GitHub</a>
- <a href="https://www.linkedin.com/in/ashley-lynn-smith/">LinkedIn</a>

## Credits

This project was built with the help of the University of Oregon's Coding Boot Camp.

## Licensing

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)
