const express = require("express");
const app = express();
const path = require("path");

// Load client page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Download file
app.get("/download", (req, res) => {
    const fileName = req.query.filename;
    const filePath = path.join(__dirname, fileName);

    res.download(filePath);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
