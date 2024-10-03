import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
});

export const ProductModel = mongoose.model("products", ProductSchema);
