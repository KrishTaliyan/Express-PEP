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

    // Armstrong series using URL
    if (req.url.startsWith("/arm")) {
        const q = url.parse(req.url, true).query;
        const n = parseInt(q.num);

        let result = "Armstrong Numbers:\n";

        for (let i = 1; i <= n; i++) {
            let sum = 0;
            let temp = i;
            let digits = i.toString().length;

            while (temp > 0) {
                let rem = temp % 10;
                sum += Math.pow(rem, digits);
                temp = Math.floor(temp / 10);
            }

            if (sum === i) {
                result += i + " ";
            }
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(result);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
