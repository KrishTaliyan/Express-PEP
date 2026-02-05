const EventEmitter = require("events");

// Create EventEmitter object
const eventEmitter = new EventEmitter();

// Event handler (listener)
eventEmitter.on("userRegistered", (user) => {
    console.log("New User Registered");
    console.log("Name:", user.name);
    console.log("Email:", user.email);
});

// Function to register user
function registerUser(name, email) {
    const user = { name, email };

    // Emit event
    eventEmitter.emit("userRegistered", user);
}

// Register users
registerUser("Krish", "krish@gmail.com");
registerUser("Amit", "amit@gmail.com");
