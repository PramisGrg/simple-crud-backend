import mongoose from "mongoose";
import "dotenv/config";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database Connected yayyy !!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
