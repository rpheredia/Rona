import * as fs from 'fs';

//readStream is a child of EventEmitter, so it will emit and event
let data = '';
var readStream = fs.createReadStream('./data/file.txt', { encoding: 'utf8', highWaterMark : 128 * 1024});

readStream.on('data', (chunk) => {
    console.log("Start Chunk: " + chunk);
    data += chunk; 
    console.log("End Chunk" );})
    .on('end', () => { console.log(data); })
    .on('error', (err) => {console.log(err); })

