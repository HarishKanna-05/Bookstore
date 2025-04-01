import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Mongodb is connected");
  } catch (e) {
    console.error("mongodb connection failed", e);
  }
};

export default connectdb;
