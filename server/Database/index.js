import mongoose from "mongoose";
import "dotenv/config";

const connectDatabase = async () => {
  await mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
      if (err) {
        console.log("Cannot connect to the database");
      } else {
        console.log("Connected to the database");
      }
    }
  );
};

export default connectDatabase;
