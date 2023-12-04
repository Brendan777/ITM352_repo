const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let filename = __dirname + '/user_data.json';
let user_reg_data = {}; // Variable to store user registration data

// Check if the user_data.json file exists and read it
if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf-8');
    user_reg_data = JSON.parse(data); // Assign parsed JSON to user_reg_data

    let user_stats = fs.statSync(filename);
    let stats_size = user_stats.size;

    console.log(`The file ${filename} has ${stats_size} characters.`);
} else {
    console.log(`The file ${filename} does not exist.`);
}

// Part 4 of lab 12
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf8');

// Define the /login GET route to serve the login form
app.get("/login", function (request, response) {
    let formStr = `
    <body>
    <form action="/login" method="POST">
    <input type="text" name="username" size="40" placeholder="enter username" ><br />
    <input type="password" name="password" size="40" placeholder="enter password"><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(formStr);
});

// Define the /login POST route to process the login form
app.post("/login", function (request, response) {
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    // Check if the username exists in user_reg_data
    if (user_reg_data.hasOwnProperty(username_entered)) {
        // Check if the password matches with the username
        if (password_entered === user_reg_data[username_entered].password) {
            response_msg = `${username_entered} is logged in.`;
        } else {
            response_msg = 'Incorrect password.';
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`/login?error=${response_msg}`);
    }
});

// Define the /register GET route to serve the registration form
app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
    <body>
    <form action="/register" method="POST">
    <input type="text" name="username" size="40" placeholder="enter username" ><br />
    <input type="password" name="password" size="40" placeholder="enter password"><br />
    <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
    <input type="email" name="email" size="40" placeholder="enter email"><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(str);
});

app.post("/register", function (request, response) {
    // Process a simple register form
    let new_user = request.body.username;

    user_reg_data[new_user] = {};
    user_reg_data[new_user].name = request.body.name;
    user_reg_data[new_user].password = request.body.password;
    user_reg_data[new_user].email = request.body.email;

    fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf8');
    response.redirect(`/login`);
});

// Start the server
app.listen(8080, () => console.log(`Listening on port 8080`));
