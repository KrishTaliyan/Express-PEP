const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("index.html","utf-8", (err,data) =>{
            res.writeHead(200, {"COntent-Type":"text/html"})
            res.end(data);
        })
    }
    else if(req.url.startsWith("/fib")){
        const q = url.parse(req.url, true).query;
        let n = parseInt(q.num);
        let result= "Fibonnaci number ";
        let a = 0, b=1;
        for(let i=1;i<=n;i++){
            result+=a + " ";
            let next = a+b;
            a= b;
            b=next;
        }
        res.writ
        res.end(result)
    }
})