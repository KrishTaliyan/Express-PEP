const express = require("express");
const app = express();

// Custom middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleString();

    console.log(method + " " + url + " " + time);

    next(); // move to next middleware or route
};

// Apply middleware globally
app.use(logger);

// Sample route
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
