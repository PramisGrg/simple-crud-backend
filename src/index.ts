import express from "express";
import { dbConnect } from "./config/db.config";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there, I am Pramis");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "End point not found" });
});

const port = process.env.PORT;
const startServer = async () => {
  await dbConnect();
  app.listen(port, () => {
    console.log("Server running on port 3000");
  });
};

startServer();
