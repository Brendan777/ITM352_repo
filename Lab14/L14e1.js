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
    // Get the username from the query parameter, or set it to an empty string if not present
    const usernameValue = request.query.username || '';

    let formStr = `
    <body>
    <form action="/login" method="POST">
    <input type="text" name="username" size="40" placeholder="enter username" value="${usernameValue}" ><br />
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
        // Redirect back to the login page with the error message and the username in the query string
        response.redirect(`/login?error=${response_msg}&username=${username_entered}`);
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
    // process a simple register form
    let new_user = request.body.username;

    let errors = false;
    let resp_msg = "";

    if (typeof user_reg_data[new_user] != 'undefined') {
        resp_msg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].name = request.body.name;
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect('./login');
        
    } else {
        resp_msg = 'Repeat password does not match with password.';
        errors = true;
    }

    if (errors) {
        response.send(resp_msg);
        // Alternatively, you can redirect to the register page with an error query parameter:
        // response.redirect(`./register?error=${resp_msg}&${params.toString()}`);
    }
});

// Start the server
app.listen(8080, () => console.log(`Listening on port 8080`));
