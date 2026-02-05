const express = require("express");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname, "/index.html")
})

app.post("/request",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;

    res.send(
        "registration done" + 
        "name: " + name + 
        "Email: " + email
    )
})

