const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/duplicate") {

    // read source file
    fs.readFile("source.txt", "utf-8", (err, data) => {
      if (err) {
        res.write("Error reading source file");
        res.end();
        return;
      }

      // write duplicate file
      fs.writeFile("duplicate.txt", data, (err) => {
        if (err) {
          res.write("Error creating duplicate file");
          res.end();
          return;
        }

        res.write("File duplicated successfully");
        res.end();
      });
    });

  } else {
    res.write("Use /duplicate to duplicate file");
    res.end();
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
