import mongoose from "mongoose";

export async function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    } else {
      const uri = process.env.MONGODB_URI;
      try {
        await mongoose.connect(uri);
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
      }
    }
  }