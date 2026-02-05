const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Middleware for arithmetic operations
function calculate(req, res, next) {
    const n = parseInt(req.body.num);

    req.inc = n + 1;
    req.dec = n - 1;
    req.square = n * n;

    next();
}

// Load page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle calculation
app.post("/calc", calculate, (req, res) => {
    res.send(`
        Increment: ${req.inc}<br>
        Decrement: ${req.dec}<br>
        Square: ${req.square}
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
