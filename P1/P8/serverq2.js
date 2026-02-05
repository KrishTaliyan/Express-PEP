const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    // Load HTML page
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Celsius to Fahrenheit
    if (req.url.startsWith("/ctof")) {
        const q = url.parse(req.url, true).query;
        const c = parseFloat(q.temp);
        const f = (c * 9 / 5) + 32;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Fahrenheit = " + f);
    }

    // Fahrenheit to Celsius
    if (req.url.startsWith("/ftoc")) {
        const q = url.parse(req.url, true).query;
        const f = parseFloat(q.temp);
        const c = (f - 32) * 5 / 9;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Celsius = " + c);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
