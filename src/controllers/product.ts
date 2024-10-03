import { Response, Request } from "express";
import { ProductModel } from "../models/product";

//get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await ProductModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An unkonwn error occured" });
    }
  }
};

//add product
export const addProduct = async (req: Request, res: Response) => {
  try {
    const addProduct = await ProductModel.create(req.body);
    res.status(200).send({ message: "Product Created", addProduct });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An unkonwn error occured" });
    }
  }
};

//delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    if (deleteProduct) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occured" });
  }
};
