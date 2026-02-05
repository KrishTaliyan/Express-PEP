const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Load form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle form submit
app.post("/submit", (req, res) => {
    const { name, reg, roll, mobile, email } = req.body;
    let errors = [];

    if (!name || name.length < 3 || name.length > 20)
        errors.push("Name must be 3–20 characters");

    if (!reg)
        errors.push("Registration number is required");

    if (!roll)
        errors.push("Roll number is required");

    if (!mobile || mobile.length !== 10)
        errors.push("Mobile number must be 10 digits");

    if (!email || email.length < 5)
        errors.push("Email is invalid");

    if (errors.length > 0) {
        res.send(errors.join("<br>"));
    } else {
        res.send("All validations passed successfully!");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
