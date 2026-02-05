const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream("bigfile.txt");

    stream.on("data", chunk => {
        console.log("Chunk size:", chunk.length);
    });

    stream.pipe(res);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
