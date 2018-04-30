"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example1_1 = require("./example1");
let x = new example1_1.PromisePhone();
let boughtPhone = x.boughtPhone();
let showPhone = x.showoffPhone();
boughtPhone.then((result) => {
    console.log(result);
    showPhone.then((resp) => {
        console.log(resp);
    });
});
