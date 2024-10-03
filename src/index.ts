import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there, I am Pramis");
});

mongoose
  .connect(
    "mongodb+srv://gurungpramis361:t4fjq85V4ZZQk10G@simple-crud-api.9y70f.mongodb.net/simple-crud-api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server running in port 3000");
    });
  })
  .catch((error) => {
    console.log("Failed to connect to database");
  });
