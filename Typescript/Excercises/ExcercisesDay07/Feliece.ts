import * as got from "got";
console.log("starting...");

got.get("http://localhost:3000/atm/32323-2323").then(
    (data) => {
        console.log("Data from web backend " + data.body);
        console.log("finished!");
    },
    (err) => {
        console.log("Error from web backend " + err.message);
    });
    got.get("http://localhost:3000/atm/withdraw/32323-2323/amount/6925").then(
        (data) => {
            console.log("Data from web backend " + data.body);
            console.log("finished!");
        },
        (err) => {
            console.log("Error from web backend " + err.message);
        });
        got.get("http://localhost:3000/atm/deposit/32323-2323/amount/612.25").then(
            (data) => {
                console.log("Data from web backend " + data.body);
                console.log("finished!");
            },
            (err) => {
                console.log("Error from web backend " + err.message);
            });
    console.log("Finished!");