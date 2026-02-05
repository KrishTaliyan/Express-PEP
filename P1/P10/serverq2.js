const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    // Parse URL
    const q = url.parse(req.url, true);
    const filename = q.query.file;

    if (filename) {
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Please provide file name in URL");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
