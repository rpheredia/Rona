"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * A utility to test the connectivity to the remote mongoDB database
 *  May 03, 2018. by  Mario Estrada Rosa
 * marioestrada@eycgrupo.com
*/
const dbconnection_1 = require("./atm/database/dbconnection");
var db = new dbconnection_1.DbConnection();
db.connectDb().then(resp => {
    var query = { accountNumber: "23232-1" };
    /* let´s find one account */
    db.findOne("accounts", query).then(data => {
        console.log("result equals ", data);
        data.currentBalance += 300;
        /* update the record , increase amount of currentBalance */
        try {
            db.updateOne("accounts", query, data).then(data => {
                console.log("Record updated successfully");
                //requery it
                db.findOne("accounts", query).then(resp => {
                    console.log("2nd. result equals ", resp);
                });
                //close the connection
                db.close();
                console.log("program finished");
            });
        }
        catch (e) {
            console.log("Error updating", e);
        }
    });
});
