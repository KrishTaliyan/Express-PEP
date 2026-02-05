// Implement an express application to Pass 2 numbers in the url of the client request to the server and access those 2 numbers from the url using the params object and perform basic arithmetic operations (+,-,*,/) in the server node.js application. Finally, add a button on the client page and provide the output values as a response with a click event.


const express = require("express");
const app = express();

// serve html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// route with params
app.get("/calc/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;

  res.send(`
    Addition = ${add} <br>
    Subtraction = ${sub} <br>
    Multiplication = ${mul} <br>
    Division = ${div}
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
