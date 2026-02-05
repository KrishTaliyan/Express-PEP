const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "companydb",
    password: "password",
    port: 5432
});

client.connect((err) => {
    if (err) {
        console.log("Connection error");
        return;
    }

    // CREATE
    client.query(
        "INSERT INTO employee(name, salary) VALUES($1, $2)",
        ["Amit", 40000],
        () => {

            // READ
            client.query("SELECT * FROM employee", (err, res) => {
                console.log(res.rows);

                // UPDATE
                client.query(
                    "UPDATE employee SET salary=$1 WHERE name=$2",
                    [50000, "Amit"],
                    () => {

                        // DELETE
                        client.query(
                            "DELETE FROM employee WHERE name=$1",
                            ["Amit"],
                            () => {
                                client.end();
                            }
                        );
                    }
                );
            });
        }
    );
});
