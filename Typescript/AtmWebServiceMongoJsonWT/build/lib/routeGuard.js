"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const environment_1 = require("../environment/environment");
class RouteGuard {
    constructor() {
        this._secret = 'thisistheseed002018';
    }
    createToken(payLoad) {
        return jwt.sign(payLoad, this._secret, {
            expiresIn: environment_1.environment.tokenExpirationTime
        });
    }
    verifyToken(token) {
        let retVal = false;
        jwt.verify(token, this._secret, (err, decoded) => {
            if (!err) {
                retVal = true;
            }
        });
        return retVal;
    }
    getDecoded(token) {
        var retVal = {};
        jwt.verify(token, this._secret, (err, decoded) => {
            if (!err) {
                retVal = decoded;
            }
        });
        return retVal;
    }
}
exports.RouteGuard = RouteGuard;
