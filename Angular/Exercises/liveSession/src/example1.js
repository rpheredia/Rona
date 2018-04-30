"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromisePhone {
    constructor() {
    }
    boughtPhone() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('My mom bought me this phone:');
            }, 2000);
        });
    }
    showoffPhone() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I am showing it off:');
            }, 2000);
        });
    }
}
exports.PromisePhone = PromisePhone;
