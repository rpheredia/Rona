"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let num = 0;
//need try catch because it is synchronous
try {
    var data = fs.readFileSync('./data/file.txt', 'utf8');
    console.log(num++);
    console.log(data);
}
catch (err) {
    console.log(err);
}
