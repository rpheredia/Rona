import * as fs from 'fs';

fs.readFile('./data/file.txt', 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
    return data;
});




// Asynchronous this is what we are using up to now. example, observables,promises
// Synchronous we are blocking the execution main thread. Can't execute multiple tasks
// Streaming When we read chunks of file.