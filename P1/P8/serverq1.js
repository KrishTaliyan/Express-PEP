const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {

    // 1️⃣ Display student details
    console.log("Student Details:");
    console.log("Name: Krish");
    console.log("Roll No: 35");
    console.log("Course: B.Tech CSE");

    // 2️⃣ Send even numbers every 2 seconds
    let num = 2;
    const interval = setInterval(() => {
        socket.emit("evenNumber", num);
        num += 2;
    }, 2000);

    // 3️⃣ On client disconnect
    socket.on("disconnect", () => {
        clearInterval(interval);
        console.log("Thank you");
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
