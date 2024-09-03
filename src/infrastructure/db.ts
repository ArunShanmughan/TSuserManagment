
import mongoose from "mongoose";
import {config} from '../config'

export const connectDb = async()=>{
  try {
    await mongoose.connect(config.MONGO_URL!);
  } catch (error) {
    console.log("db not connected",error);
  }
}
