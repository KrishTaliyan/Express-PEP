const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    // Load HTML page
    if (req.url === "/") {
        fs.readFileSync("indexq2.html", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }

    // Sum of digits using URL
    else if (req.url.startsWith("/sum")) {
        const q = url.parse(req.url, true).query;
        let num = q.num;
        let sum = 0;

        for (let digit of num) {
            sum += Number(digit);
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Sum of digits = " + sum);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
