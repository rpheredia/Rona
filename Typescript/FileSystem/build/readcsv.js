"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const parse = require("csv-parse");
let txbleAmt = 0.00;
fs.createReadStream('./data/order.csv', 'utf8')
    .pipe(parse({ delimiter: ',' }))
    .on('data', (csvrow) => {
    if (csvrow[0] != "number") {
        txbleAmt = parseFloat(csvrow[2]) * .125;
        console.log("Total order for " + csvrow[0] + ", is BZD " + csvrow[2] +
            ", Sales Tax BZD " + txbleAmt.toFixed(2));
    }
})
    .on('end', () => {
    console.log("End");
});
