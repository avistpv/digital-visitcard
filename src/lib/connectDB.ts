import mongoose from "mongoose";

export default async function connectDB(){
    const MONGODB_URI = process.env.MONGODB_URI
    if (!MONGODB_URI) {
        throw new Error(
            'Please define the MONGODB_URI environment variable inside .env.local',
        )
    }
    await mongoose.connect(MONGODB_URI);
}