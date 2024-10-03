import { Response, Request } from "express";
import { ProductModel } from "../models/product";

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
