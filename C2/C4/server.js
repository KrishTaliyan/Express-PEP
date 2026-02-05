const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

client.connect((err) => {
    if (err) {
        console.log("Connection failed");
        return;
    }

    console.log("Connected to MongoDB");

    const db = client.db("userDB");
    const users = db.collection("users");

    // CREATE
    users.insertOne(
        { name: "Rahul", email: "rahul@gmail.com", age: 24 },
        () => {

            // READ
            users.find().toArray((err, result) => {
                console.log("All Users:", result);

                // UPDATE
                users.updateOne(
                    { name: "Rahul" },
                    { $set: { age: 25 } },
                    () => {

                        // DELETE
                        users.deleteOne(
                            { name: "Amit" },
                            () => {
                                client.close();
                            }
                        );
                    }
                );
            });
        }
    );
});
