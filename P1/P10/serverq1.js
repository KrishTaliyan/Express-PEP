const express = require("express");
const path = require("path");
const app = express();

// Load client page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Send file to client
app.get("/view", (req, res) => {
    const fileName = req.query.filename;
    const filePath = path.join(__dirname, fileName);

    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
