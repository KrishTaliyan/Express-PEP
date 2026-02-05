const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Send HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Socket connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    io.emit("message", "User connected: " + socket.id);

    socket.on("sendMsg", (msg) => {
        io.emit("message", socket.id + ": " + msg);
    });

    socket.on("disconnect", () => {
        io.emit("message", "User disconnected: " + socket.id);
    });
});


server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
