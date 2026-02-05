const http = require('http');
const fs = require("fs");
const url = require("url");

http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("indexq2.html","utf-8", (err,data)=>{
            if(err){
                console.log("Error is coming ");
            }
            else{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        })
    }
    else if(req.url.startWith("/sum")){
        const q = url.parse(req.url, true).query;
        let num = q.num;
        let sum = 0;
        for(let digit of num){
            sum +=Number(i);
        }
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Sum of digits is: "+ sum);
        }
})
server.listen(3000, ()=>{
    console.log("Server is running")
})