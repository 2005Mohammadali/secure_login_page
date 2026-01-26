import mongoose from "mongoose";
import * as config from "config";

const dbUri = config.get<string>("dbUri");

export default async function dbConnect(){
    try {
        await mongoose.connect(dbUri);
        console.log("Database connected successfully ");
    } catch (error) {   
        console.error("Database connection error:", error);
    }
}

