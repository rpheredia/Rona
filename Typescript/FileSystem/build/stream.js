"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//readStream is a child of EventEmitter, so it will emit and event
let data = '';
var readStream = fs.createReadStream('./data/file.txt', { encoding: 'utf8', highWaterMark: 128 * 1024 });
readStream.on('data', (chunk) => {
    console.log("Start Chunk: " + chunk);
    data += chunk;
    console.log("End Chunk");
})
    .on('end', () => { console.log(data); })
    .on('error', (err) => { console.log(err); });
