import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - GET Method" });
};

export const getProduct = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - GET Method" });
};

export const addNewProduct = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - POST Method" });
};

export const updateProduct = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - PATCH Method" });
};

export const deleteProduct = async (req: Request, res: Response) => {
  res.json({ message: "Product Router - DELETE Method" });
};
