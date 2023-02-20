import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);

const MONGO_URI = process.env.DEV_MONGO_URI;

const DBCONNECT = async () => {
    try{
        await mongoose.connect(MONGO_URI, {autoIndex: true});
        console.log("db connected successfully");
    }   catch (err) {
        console.log(err);
        process.exit();
    }
};

export default DBCONNECT;