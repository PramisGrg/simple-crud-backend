import express from "express";
import { dbConnect } from "./config/db.config";
import productRouter from "./routes/products.route";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello there, I am Pramis");
});

app.use("/products", productRouter);

app.get("*", (req, res) => {
  res.status(404).json({ error: "End point not found" });
});

const startServer = async () => {
  await dbConnect();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
