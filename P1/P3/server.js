const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        // create readable stream
        const readStream = fs.createReadStream("employee.txt");

        res.writeHead(200, { "Content-Type": "text/plain" });

        // read file and send to browser
        readStream.pipe(res);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
