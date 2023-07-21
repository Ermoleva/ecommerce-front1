import mongoose from "mongoose";


export function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to MongoDB.");
        return mongoose.connection.asPromise();
    } else {
        console.log("Attempting to connect to MongoDB...");
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri).then(() => {
            console.log("Successfully connected to MongoDB.");
        }).catch((err) => {
            console.error("Failed to connect to MongoDB:", err);
        });
    }
}