"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
App_1.default.listen(3000, function (err) {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log('Atm Web Service running on port 3000');
    }
});
