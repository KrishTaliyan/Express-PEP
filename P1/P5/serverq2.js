const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    // Load HTML page
    if (req.url === "/") {
        fs.readFile("indexq2.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Fibonacci using URL
    if (req.url.startsWith("/fib")) {
        const q = url.parse(req.url, true).query;
        const n = parseInt(q.num);

        let a = 0, b = 1;
        let result = "Fibonacci Series:\n";

        for (let i = 1; i <= n; i++) {
            result += a + " ";
            let next = a + b;
            a = b;
            b = next;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(result);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
