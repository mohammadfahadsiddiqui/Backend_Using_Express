const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,)
        console.log("MongoDB connected Successfully");
    }
    catch (e) {
        console.error("Unable to connect to MongoDB", e.message);
    }
}; 

module.exports = connectDB;


