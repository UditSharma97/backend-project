import 'dotenv/config';
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.error("ERR: ", error);
        throw error;
    });
    app.listen(process.env.PORT || 5000, () => {
        console.log(`🐌 Server is listening ${process.env.PORT}`)});
})
.catch((error) => {
    console.error("ERROR: ", error);
})















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
