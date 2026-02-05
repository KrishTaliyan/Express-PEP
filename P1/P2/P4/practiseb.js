const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("indexq2.html","utf-8",(err,data)=>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        })
    }
    else if(req.url.startsWith("/fact")){
        const q = url.parse(req.url,true).query;
        let n = parseInt(q.num);
        let fact = 1;
        for(let i=0;i<=n;i++){
            fact = fact *i;
        }
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Factorial is : " + n +" is" +fact)
    }
})
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});