import mongoose from "mongoose";
import dotenv from "dotenv";


MONGO_URI="mongodb+srv://<sahilpatel>:sahilpatel123@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("Error in connecting to DB:", error.message);
        process.exit(1);
    }
};

connectDB();

export default connectDB;
