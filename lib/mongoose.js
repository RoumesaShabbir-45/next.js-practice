import mongoose from "mongoose";

const MONGODB_URI= process.env.MONGODB_URI;
export async function  connectDB(){

    try{
        if (mongoose.Connection.readystate>=1){
                console.log("MD already connected");
                return;
            }
            await mongoose.Connection(MONGODB_URI);
            console.log ("MD already successfully")
         }
         catch(err){
            console.log("MD connection error:",err);
         }
        }
