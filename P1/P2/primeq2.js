const fs = require("fs");

// create writable stream
const stream = fs.createWriteStream("sample.txt");

// function to check prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// write primes up to 100
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    stream.write(i + "\n");
  }
}

// close stream
stream.end();

stream.on("finish", () => {
  console.log("Task Completed");
});
