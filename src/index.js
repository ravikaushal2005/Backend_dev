import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});

// DB connect + server start
connectDB()
  .then(() => {
    const app = express();

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });   









//import mongoose from "mongoose";
// import { DB_NAME, db_name } from "./constants";

// const app =express();

// (async () => {
//   try {
//     await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}');    // await is used to wait for the connection to be established before proceeding
   
//     app.on ("error", (error) => {
//       console.error("MongoDB connection error:", error);
//       throw error; // Rethrow the error to be caught by the outer catch block
//     });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });


//     } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     }
// })();