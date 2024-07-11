import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - GET Method" });
};

export const getProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ message: `Product Router - GET Method - Query Id = ${id}` });
};

export const addNewProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  res.json({ message: `Product Router - POST Method`, data: newProduct });
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  res.json({
    message: `Product Router - PATCH Method - Query Id = ${id}`,
    data: updatedProduct,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ message: `Product Router - DELETE Method - Query Id = ${id}` });
};
