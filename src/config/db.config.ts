import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGODB_URI;

export const dbConnect = async () => {
  try {
    await mongoose.connect(url as string);
    console.log("Database Connected yayyy !!!");
  } catch (error) {
    console.log(error);
    console.log("There is error");
    process.exit(1);
  }
};
