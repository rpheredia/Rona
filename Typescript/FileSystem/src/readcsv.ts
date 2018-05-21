import * as fs from 'fs';
import * as parse from 'csv-parse';


let txbleAmt = 0.00;
fs.createReadStream('./data/order.csv', 'utf8')
    .pipe(parse({delimiter: ','}))
    .on('data', (csvrow : any) => {
        if (csvrow[0] != "number") {
            txbleAmt = parseFloat(csvrow[2]) * .125;
            console.log("Total order for " + csvrow[0] +", is BZD " + csvrow[2] +
                        ", Sales Tax BZD " + txbleAmt.toFixed(2));
        }       
    })
    .on('end',() => {
      console.log("End");
    });