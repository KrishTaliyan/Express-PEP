const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Show registration form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Register + validation
app.post(
    "/register",
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 5 }).withMessage("Password must be 5 characters"),

    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.send(errors.array().map(e => e.msg).join("<br>"));
        }

        res.send("Registration Successful");
    }
);

app.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);
