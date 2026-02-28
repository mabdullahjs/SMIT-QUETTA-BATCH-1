import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import connectDB from './src/db/index.js';

// dotenv config
dotenv.config();

const app = express();

// cors
app.use(cors());
app.use(express.json()); 

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });