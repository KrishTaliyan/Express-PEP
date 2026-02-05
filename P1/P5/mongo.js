const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";

async function run() {
    const client = new MongoClient(url);
    await client.connect();
    console.log("MongoDB Connected");

    // Create / use database
    const db = client.db("StudentDB");

    // Create collection
    const collection = db.collection("House");

    // Insert multiple student documents
    await collection.insertMany([
        { Hno: 101, rooms: 2, furniture: "Yes", rent: 8000, name: "Amit", marks: 75 },
        { Hno: 102, rooms: 3, furniture: "No", rent: 10000, name: "Rahul", marks: 65 },
        { Hno: 103, rooms: 1, furniture: "Yes", rent: 6000, name: "Neha", marks: 85 }
    ]);

    console.log("Documents Inserted");

    // Sort students by marks (ascending)
    const result = await collection
        .find()
        .sort({ marks: 1 })
        .toArray();

    console.log("Students sorted by marks (Ascending):");
    console.log(result);

    client.close();
}

run();
