import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.TEST_MONGO_URI  as string,);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
