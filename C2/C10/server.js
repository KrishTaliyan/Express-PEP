const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askNumber() {
    rl.question("Enter a number (or type 'done'): ", (input) => {

        if (input === "done") {
            // Calculate statistics
            let sum = 0;
            let max = numbers[0];

            for (let n of numbers) {
                sum += n;
                if (n > max) max = n;
            }

            let avg = sum / numbers.length;

            console.log("Sum:", sum);
            console.log("Average:", avg);
            console.log("Maximum:", max);

            rl.close();
        } else {
            numbers.push(Number(input));
            askNumber(); // loop again
        }
    });
}

askNumber();
