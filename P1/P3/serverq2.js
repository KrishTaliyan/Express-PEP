const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    if (req.url.startsWith("/sort")) {
        const q = url.parse(req.url, true).query;
        let arr = q.data.split(",").map(Number);

        arr.sort((a, b) => a - b);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Sorted Values: " + arr.join(", "));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
