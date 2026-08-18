import 'dotenv/config';
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

console.log(process.env.MONGODB_URI);
connectDB();














/* WAY  1 For db connections
import express from "express";
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        app.on("errror",(error) => {
            console.log("ERRR: ", error);
        })

        app.listen(process.env.PORT, () => {
            console.log("App is listening at port", `$
            {process.env.PORT}`);
        })
    }
    catch(err){
        console.error("ERROR: ",err);
        throw err
    }
})();
*/
