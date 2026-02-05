const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Socket connection
io.on("connection", (socket) => {
    visitorCount++;

    // 1️⃣ Display student details in server console
    console.log("Student Details:");
    console.log("Name: Krish");
    console.log("Roll No: 35");
    console.log("Course: B.Tech CSE");

    // 2️⃣ Broadcast only odd visitor count
    if (visitorCount % 2 !== 0) {
        io.emit("oddVisitor", visitorCount);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
