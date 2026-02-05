const eventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("UserRegistered",(user)=>{
    console.log("USer registered");
    console.log("Name: ",user.name);
    console.log("Name: ",user.email);
}); 
function registerUser(name,email){
    const user = {name,email};
    eventEmitter.EventEmitter("user registered",user);
}
registerUser("Krish","Krish@gmail.com");