const { MongoClient } = require("mongodb");

// MongoDB URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
    await client.connect();
    console.log("MongoDB Connected");

    // Create / use database
    const db = client.db("CompanyDB");

    // Create collection
    const collection = db.collection("cars");

    // Insert multiple documents
    await collection.insertMany([
        { Model: "i20", Company: "Hyundai", Mileage: 18, color: "White", Owner: "Rahul", salary: 35000 },
        { Model: "Swift", Company: "Maruti", Mileage: 22, color: "Red", Owner: "Amit", salary: 28000 },
        { Model: "City", Company: "Honda", Mileage: 17, color: "Black", Owner: "Neha", salary: 45000 }
    ]);

    console.log("Documents Inserted");

    // Query salary greater than 30000
    const result = await collection.find({ salary: { $gt: 30000 } }).toArray();

    console.log("Employees with salary > 30000:");
    console.log(result);

    client.close();
}

run();
