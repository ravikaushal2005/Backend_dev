// this code for mongodb (local)

// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGO_URI}/${DB_NAME}`
//     );

//     console.log("MongoDB Connected:", connectionInstance.connection.host);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// export default connectDB; 



//this code for mongodb (web) 
// method 1

// import mongoose from "mongoose";

// const DB_NAME = "backend";

// const uri =
//   "mongodb+srv://backendDev:ravi12345@backenddev.bhxwbgp.mongodb.net";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${uri}/${DB_NAME}`
//     );

//     console.log(
//       `MongoDB Connected: ${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;



// method 2

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;