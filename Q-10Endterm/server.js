//Question your application needs to store session data temporarily
// a) create a route/setcookie that sets a cookie sessionid=12345
// b) create another route/readcookie that read and display the cookie.  and /delete route for to delete the cookies 

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sessionid = 12345;
app.use(bodyParser.urlencoded({extended: true}));


app.get("/setcookie",(req,res)=>{
    res.send("Cookies are Created with " +  sessionid);
    console.log("Cookies Created Successfully",sessionid);
})

app.get("/readcookie",(req,res)=>{
    res.send("Cookies are Found");
    console.log("Cookies are found"+ " with sessionid " + sessionid);
})

app.get("/delete",(req,res)=>{
    res.send();
    res.emit();
    console.log("cookies are deleted");
})

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
})