const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Sever(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

io.on("Connection", (socket)=>{
    console.log("User connected");
    io.emit("message", "User connected", socket.id);

    socket.on("sendMsg",(msg)=>{
        io.emit("message" , socket.id + msg);
    })

    socket.on("User discoinnect",()=>{
        io.emit("message")
    })
})