const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// GET request – show registration form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// POST request – process form data
app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    res.send(
        "Registration Successful<br>" +
        "Name: " + name + "<br>" +
        "Email: " + email
    );
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
